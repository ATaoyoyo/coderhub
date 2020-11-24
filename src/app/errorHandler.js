const errorTypes = require('../constants/errorTypes')

const errorHandler = (error, ctx) => {
  let status, message
  switch (error.message) {
    case errorTypes.USERNAME_OR_PASSWORD_NOT_EMPTY:
      status = 400
      message = '用户名或密码不能为空'
      break
    case errorTypes.USER_IS_ALREADY_EXIST:
      status = 409
      message = '用户名已经存在'
      break
    case errorTypes.USER_IS_NOT_EXIST:
      status = 400
      message = '用户不存在'
      break
    case errorTypes.PASSWORD_IS_NOT_RIGHT:
      status = 400
      message = '密码错误'
      break
    default:
      status = 404
      message = 'NOT FOUND'
      break
  }
  ctx.status = status
  ctx.body = message
}

module.exports = errorHandler
