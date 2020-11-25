const Router = require('koa-router')

const authorRouter = new Router()

const { login } = require('../controller/author.controller')
const { verifyLogin, verifyAuth } = require('../middleware/author.middleware')
authorRouter.post('/login', verifyLogin, login)
authorRouter.get('/test', verifyAuth)

module.exports = authorRouter
