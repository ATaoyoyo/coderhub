const jwt = require('jsonwebtoken')

const errorTypes = require('../constants/errorTypes')
const service = require('../service/user.service')
const { PUBLIC_KEY } = require('../app/config')
const md5Password = require('../utils/passwordToMd5')

const verifyLogin = async (ctx, next) => {
  const { name, password } = ctx.request.body
  // 1. 判断用户名与密码是否为空
  if (!name || !password) {
    const error = new Error(errorTypes.USERNAME_OR_PASSWORD_NOT_EMPTY)
    return ctx.app.emit('error', error, ctx)
  }
  // 2. 判断用户名是否存在
  const result = await service.getUserByName(name)
  const user = result[0]
  ctx.user = user
  if (!user) {
    const error = new Error(errorTypes.USER_IS_NOT_EXIST)
    return ctx.app.emit('error', error, ctx)
  }
  // 3. 判断用户密码是否正确
  if (md5Password(password) !== user.password) {
    const error = new Error(errorTypes.PASSWORD_IS_NOT_RIGHT)
    return ctx.app.emit('error', error, ctx)
  }

  await next()
}

const verifyAuth = (ctx, next) => {
  const authorization = ctx.header.authorization
  const token = authorization.replace('Bearer ', '')
  console.log(token)
  try {
    const result = jwt.verify(token, PUBLIC_KEY, { algorithm: ['RS256'] })
    ctx.user = result
    ctx.body = '验证成功'
    next()
  } catch (err) {
    console.log(err)
    const error = new Error(errorTypes.UNAUTHORIZATION)
    ctx.app.emit('error', error, ctx)
  }
}

module.exports = {
  verifyLogin,
  verifyAuth,
}
