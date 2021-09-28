import { model } from 'mongoose'
import { categoryModel } from '../../models/category'
import { productModel } from '../../models/product'

const addCategory = async (req, res, next) => {
    try {
        const categoryData = req.body
        const categoryRecord = await categoryModel.create(categoryData)
        const displayRecord = categoryRecord.toObject()
        return res.status(200).json({
            message: 'New category created',
            data: displayRecord,
        })
    } catch (error) {
        if (error.code === 11000) {
            return res.status(401).json({
                message: 'Category already exist',
            })
        }
        next(error)
    }
}

const updateCategory = async (req, res, next) => {
    try {
        const categoryData = req.body
        if (!categoryData.name) {
            return res.status(401).json({
                message: 'Select the of category to update',
            })
        }
        if (!categoryData.newName)
            return res.status(401).json({
                message: 'You must choose a field to edit',
            })
        const newCategoryRecord = await categoryModel.findOneAndUpdate(
            { name: categoryData.name },
            {
                name: categoryData.newName,
                description: categoryData.newDescription,
            }
        )
        if (!newCategoryRecord) {
            return res.status(401).json({
                message: 'Selected category does not exist',
            })
        }
        return res.status(401).json({
            message: 'Category updated successfuly',
        })
    } catch (error) {
        next(error)
    }
}
const deleteCategory = async (req, res, next) => {
    try {
        const categoryData = req.body
        if (!categoryData.name)
            return res.status(401).json({
                message: 'Select the name of category to be deleted',
            })
        const deletedCategory = await categoryModel.findOneAndDelete({
            name: categoryData.name,
        })
        if (!deletedCategory) {
            return res.status(401).json({
                message: 'Selected category does not exist',
            })
        }
        return res.status(200).json({
            message: 'Category deleted successfully ',
        })
    } catch (error) {
        next(error)
    }
}
const viewCategories = async (req, res, next) => {
    try {
        const filter = {}
        const categories = await categoryModel.find(filter, {
            name: 1,
            description: 1,
            _id: 0,
        })

        return res.status(200).json({
            data: categories,
        })
    } catch (error) {
        next(error)
    }
}

module.exports = { addCategory, updateCategory, deleteCategory, viewCategories }
