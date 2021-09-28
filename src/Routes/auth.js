const { Router } = require('express')
const auth = require('../controllers/auth')

const authRoute = Router()
authRoute.post('/register', auth.signUp)
authRoute.get('/login', auth.signIn)

module.exports = authRoute
