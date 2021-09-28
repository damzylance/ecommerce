import mongoose from 'mongoose'

const categorySchema = mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: String,
})

// eslint-disable-next-line import/prefer-default-export
export const categoryModel = mongoose.model('Category', categorySchema)
