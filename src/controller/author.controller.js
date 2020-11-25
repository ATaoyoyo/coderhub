const jwt = require('jsonwebtoken')

const { PRIVATE_KEY } = require('../app/config')
class authorController {
  async login(ctx, next) {
    const { id, name } = ctx.user
    const token = jwt.sign({ id, name }, PRIVATE_KEY, {
      expiresIn: 3600 * 24,
      algorithm: 'RS256',
    })
    ctx.headers.authorization = token
    ctx.body = { id, name, token }
  }
}

module.exports = new authorController()
