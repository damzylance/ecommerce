/* eslint-disable consistent-return */
import { userModel } from '../../models/user'

const userProfile = async (req, res, next) => {
    try {
        const currentUser = req.user
        const userData = await userModel.findOne({ email: currentUser.user })
        res.send(
            `Name:${userData.firstName}\n Email: ${userData.email} \n Role: ${userData.role}`
        )
        // return res.status(401).json({
        //     data: userData,
        // })
    } catch (error) {
        next(error)
    }
}

module.exports = userProfile
