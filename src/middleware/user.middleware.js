const errorTypes = require('../constants/errorTypes')
const service = require('../service/user.service')
const passwordToMd5 = require('../utils/passwordToMd5')

const verifyUser = async (ctx, next) => {
  const { name, password } = ctx.request.body
  // 判断用户名密码不为空
  if (!name || !password) {
    const error = new Error(errorTypes.USERNAME_OR_PASSWORD_NOT_EMPTY)
    return ctx.app.emit('error', error, ctx)
  }

  // 判断用户是否已经注册
  const result = await service.getUserByName(name)
  console.log(result)
  if (result.length) {
    const error = new Error(errorTypes.USER_IS_ALREADY_EXIST)
    return ctx.app.emit('error', error, ctx)
  }

  await next()
}

module.exports = {
  verifyUser,
}
