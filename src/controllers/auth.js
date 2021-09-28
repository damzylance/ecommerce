/* eslint-disable consistent-return */
import { userModel } from '../../models/user'

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const signUp = async (req, res, next) => {
    try {
        const userData = req.body
        if (!userData.role) userData.role = 'BASIC'
        const errorMessages = []

        if (!userData.email) {
            const errorMessage = 'Email field is missing'
            errorMessages.push(errorMessage)
        }
        if (!userData.password) {
            const errorMessage = 'Password field is missing'
            errorMessages.push(errorMessage)
        }
        if (!userData.firstName) {
            const errorMessage = 'First name is missing'
            errorMessages.push(errorMessage)
        }
        if (!userData.lastName) {
            const errorMessage = 'Last name is missing'
            errorMessages.push(errorMessage)
        }
        if (errorMessages.length > 0) {
            return res.status(404).json({ message: errorMessages })
        }
        const hashedPassword = bcrypt.hashSync(userData.password)
        userData.password = hashedPassword
        const record = await userModel.create(userData)
        const dataObj = record.toObject()
        delete dataObj.password
        return res.status(400).json({
            message: 'registration successful',
            data: dataObj,
        })
    } catch (error) {
        console.log(error.code)
        if (error.code === 11000)
            return res.status(404).json({
                message: `user with email already exist`,
            })
        next(error)
    }
}
const signIn = async (req, res, next) => {
    try {
        const userData = req.body
        if (!userData.emai && !userData.password) {
            return res
                .status(404)
                .json({ message: 'enter email and password to login' })
        }
        const userRecord = await userModel
            .findOne({ email: userData.email })
            .select('email password role')
        console.log(userRecord)
        if (!userRecord)
            return res.status(404).json({
                message: 'incorrect email or password',
            })
        const validPassword = bcrypt.compareSync(
            userData.password,
            userRecord.password
        )
        if (!validPassword)
            return res.status(404).json({
                message: 'invalid password',
            })
        console.log(userRecord.role)

        const token = jwt.sign(
            {
                user: userRecord.email,
                role: userRecord.role,
            },
            'secret',
            {
                expiresIn: '30d',
            }
        )

        return res.status(404).json({
            message: 'login successful',
            data: token,
        })
    } catch (error) {
        next(error)
    }
}

module.exports = { signUp, signIn }
