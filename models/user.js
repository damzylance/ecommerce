import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    password: { type: String, required: true },
    phoneNumber: Number,
    role: {
        type: String,
        enum: ['BASIC', 'ADMIN'],
    },
    imagePath: String,
})

// eslint-disable-next-line import/prefer-default-export
export const userModel = mongoose.model('User', UserSchema)

// id,
// firstName,
// lastName,
// phoneNumber, // optional
// password
// email,
// imagePath
// role // admin or basic
// }
