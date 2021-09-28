import { basicUserRole, adminUserRole } from '../middlewares/authorization'

const { Router } = require('express')
const auth = require('./auth')
const profile = require('./user')
const addproduct = require('./addproduct')
const addCategory = require('./category')

const rootRouter = Router()
rootRouter.use('/', auth)
rootRouter.use('/', basicUserRole, profile)
rootRouter.use('/', adminUserRole, addproduct)
rootRouter.use('/', adminUserRole, addCategory)

module.exports = rootRouter
