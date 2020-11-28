const service = require('../service/moment.service')
class MomentController {
  async create(ctx, next) {
    const userId = ctx.user.id
    const content = ctx.request.body.content
    console.log(userId, content)

    const result = await service.create(userId, content)
    ctx.body = result
  }

  // 获取某一条动态
  async detail(ctx, next) {
    const momentId = ctx.params.momentId
    const result = await service.getMomentById(momentId)
    ctx.body = result
  }

  // 获取动态列表
  async multiple(ctx, next) {
    const { page, size } = ctx.query
    const result = await service.getMoments(page, size)
    ctx.body = result
  }
}

module.exports = new MomentController()
