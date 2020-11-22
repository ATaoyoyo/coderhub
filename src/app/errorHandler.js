const errorTypes = require('../constants/errorTypes')

const errorHandler = (error, ctx) => {
  let status, message
  switch (error.message) {
    case error.USERNAME_OR_PASSWORD_NOT_EMPTY:
      status = 400
      message = '用户名或密码不能为空'
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
