const Router = require('koa-router')

const { verifyAuth, verifyPermission } = require('../middleware/author.middleware')
const {
  create,
  detail,
  multiple,
  update,
  remove,
} = require('../controller/moment.controller')

const momentRouter = new Router({ prefix: '/moment' })

momentRouter.post('/', verifyAuth, create)
momentRouter.get('/', multiple)
momentRouter.get('/:momentId', detail)
momentRouter.patch('/:momentId', verifyAuth, verifyPermission, update)
momentRouter.delete('/:momentId', verifyAuth, verifyPermission, remove)

module.exports = momentRouter
