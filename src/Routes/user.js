const { Router } = require('express')
const userProfile = require('../controllers/profile')

const userRoute = Router()
userRoute.get('/profile', userProfile)

module.exports = userRoute
