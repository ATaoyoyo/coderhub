const Router = require('koa-router')

const { verifyAuth } = require('../middleware/author.middleware')
const { create } = require('../controller/moment.controller')

const momentRouter = new Router({ prefix: '/moment' })

momentRouter.post('/', verifyAuth, create)

module.exports = momentRouter
