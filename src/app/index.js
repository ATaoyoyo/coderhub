const Koa = require('koa')
const bodyParser = require('koa-bodyparser')

const app = new Koa()

const errorHandler = require('./errorHandler')

const userRouter = require('./../router/user.router')
const authorRouter = require('./../router/author.router')

app.use(bodyParser())
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())
app.use(authorRouter.routes())
app.use(authorRouter.allowedMethods())

app.on('error', errorHandler)

module.exports = app
