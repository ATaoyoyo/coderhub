const Koa = require('koa')
const bodyParser = require('koa-bodyparser')

const app = new Koa()

const errorHandler = require('./errorHandler')
const useRoutes = require('../router/index')

// 1. 解析参数
app.use(bodyParser())
// 2. 引用路由
useRoutes(app)

app.on('error', errorHandler)

module.exports = app
