class authorController {
  async login(ctx, next) {
    const {name, password} =  ctx.request.body
    ctx.body = `welcome,${name}`
  }
}

module.exports = new authorController()
