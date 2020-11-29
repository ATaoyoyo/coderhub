const service = require('../service/comment.service')
class CommentController {
  // 创建评论
  async create(ctx, next) {
    const { id } = ctx.user
    const { momentId, content } = ctx.request.body
    try {
      const result = await service.inserIntoComment(content, momentId, id)
      ctx.body = result
    } catch (error) {
      console.log(error)
    }
  }

  // 回复评论
  async reply(ctx, next) {
    const { id } = ctx.user
    const { commentId } = ctx.params
    const { momentId, content } = ctx.request.body
    try {
      const result = await service.replyComment(content, momentId, commentId, id)
      ctx.body = result
    } catch (error) {
      console.log(error)
    }
  }

  // 更新评论
  async update(ctx, next) {
    const { commentId } = ctx.params
    const { content } = ctx.request.body
    try {
      const result = await service.updateComment(commentId, content)
      ctx.body = result
    } catch (error) {
      console.log(error)
    }
  }

  // 删除评论
  async remove(ctx, next) {
    const { commentId } = ctx.params
    try {
      const result = await service.removeComment(commentId)
      ctx.body = result
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new CommentController()
