import { Router } from 'express'

const {
    addCategory,
    updateCategory,
    deleteCategory,
    viewCategories,
} = require('../controllers/category')

const categoryRouter = Router()
categoryRouter.post('/addcategory', addCategory)
categoryRouter.post('/updatecategory', updateCategory)
categoryRouter.post('/deletecategory', deleteCategory)
categoryRouter.get('/allcategories', viewCategories)

module.exports = categoryRouter
