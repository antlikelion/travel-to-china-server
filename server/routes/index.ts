import Router = require('koa-router')
import user from './user'

const router = new Router()
router.use('/users', user.routes())

export default router
