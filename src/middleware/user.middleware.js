const errorTypes = require('../constants/errorTypes')
const service = require('../service/user.service')
const md5Password = require('../utils/passwordToMd5')

const verifyUser = async (ctx, next) => {
  const { name, password } = ctx.request.body
  // 判断用户名密码不为空
  if (!name || !password) {
    const error = new Error(errorTypes.USERNAME_OR_PASSWORD_NOT_EMPTY)
    return ctx.app.emit('error', error, ctx)
  }

  // 判断用户是否已经注册
  const result = await service.getUserByName(name)
  if (result.length) {
    const error = new Error(errorTypes.USER_IS_ALREADY_EXIST)
    return ctx.app.emit('error', error, ctx)
  }

  await next()
}

const handlePassword = async (ctx, next) => {
  const { password } = ctx.request.body
  ctx.request.body.password = md5Password(password)
  await next()
}

module.exports = {
  verifyUser,
  handlePassword,
}
