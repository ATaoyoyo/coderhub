const Router = require('koa-router')

const { verifyAuth } = require('../middleware/author.middleware')
const { create, detail, multiple } = require('../controller/moment.controller')

const momentRouter = new Router({ prefix: '/moment' })

momentRouter.post('/', verifyAuth, create)
momentRouter.get('/', multiple)
momentRouter.get('/:momentId', detail)

module.exports = momentRouter
