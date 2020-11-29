const Router = require('koa-router')
const { verifyAuth } = require('../middleware/author.middleware')
const { create, reply, update, remove } = require('../controller/comment.controller')

const commentRouter = new Router({ prefix: '/comment' })

commentRouter.post('/', verifyAuth, create)
commentRouter.post('/:commentId/reply', verifyAuth, reply)
commentRouter.patch('/:commentId/update', verifyAuth, update)
commentRouter.delete('/:commentId/delete', verifyAuth, remove)

module.exports = commentRouter
