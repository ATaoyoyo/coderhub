const { verify } = require('jsonwebtoken')
const Router = require('koa-router')
const { verifyAuth } = require('../middleware/author.middleware')
const { create } = require('../controller/comment.controller')

const commentRouter = new Router({ prefix: '/comment' })

commentRouter.post('/', verifyAuth, create)

module.exports = commentRouter
