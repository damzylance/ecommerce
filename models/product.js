import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    categoryId: { type: String, required: true },
    imagePath: { type: String, required: true },
    description: String,
})

// eslint-disable-next-line import/prefer-default-export
export const productModel = mongoose.model('Product', productSchema)
