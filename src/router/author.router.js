const Router = require('koa-router')

const authorRouter = new Router()

const { login } = require('../controller/author.controller')
const { verifyLogin } = require('../middleware/author.middleware')
authorRouter.post('/login', verifyLogin, login)

module.exports = authorRouter
