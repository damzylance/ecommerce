const { Router } = require('express')
const multer = require('multer')
const { addProduct } = require('../controllers/addproduct')

const upload = multer({ dest: 'uploads/' })

const productRouter = Router()

productRouter.post('/addproduct', upload.single('product_image'), addProduct)

module.exports = productRouter
