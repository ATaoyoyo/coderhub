const errorTypes = require('../constants/errorTypes')

const verifyUser = async (ctx, next) => {
  const { name, password } = ctx.request.body

  if (!name || !password || name === '' || password === '') {
    const error = errorTypes.USERNAME_OR_PASSWORD_NOT_EMPTY
    return ctx.app.emit('error', error, ctx)
  }

  await next()
}

module.exports = {
  verifyUser,
}
