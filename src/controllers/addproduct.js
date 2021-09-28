import { productModel } from '../../models/product'
import { categoryModel } from '../../models/category'

const addProduct = async (req, res, next) => {
    try {
        const productData = req.body
        if (!req.file)
            return res.status(401).json({
                message: 'please upload product image',
            })
        productData.imagePath = req.file.path
        if (
            !productData.name ||
            !productData.category ||
            !productData.price ||
            !productData.imagePath
        ) {
            return res
                .status(401)
                .json({ message: 'important fields are missing' })
        }
        const categoryRecord = await categoryModel
            .findOne({
                name: productData.category,
            })
            .select('id ')
        if (!categoryRecord)
            return res.status(401).json({
                message: "selected category doesn't exist ",
            })
        console.log(categoryRecord.id)
        productData.categoryId = categoryRecord.id
        const productRecord = await productModel.create(productData)
        return res.status(200).json({
            message: 'Product added successfully',
            data: productRecord,
        })
    } catch (error) {
        next(error)
    }
}
const updateProduct = (req, res, next) => {
    try {
        const productData = req.body

        return res.status(201).json({
            data: productData,
        })
    } catch (error) {
        next(error)
    }
}

module.exports = { addProduct, updateProduct }
