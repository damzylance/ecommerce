const jwt = require('jsonwebtoken')

const basicUserRole = (req, res, next) => {
    let token = req.headers.authorization
    if (!token) res.status(403).json({ message: 'No token in the header' })
    // eslint-disable-next-line prefer-destructuring
    token = token.split(' ')[1]
    try {
        const data = jwt.verify(token, 'secret')
        req.user = data
        return next()
    } catch (error) {
        next(error)
    }
}
const adminUserRole = (req, res, next) => {
    let token = req.headers.authorization
    if (!token) res.status(403).json({ message: 'No token in the header' })
    // eslint-disable-next-line prefer-destructuring
    token = token.split(' ')[1]
    try {
        const data = jwt.verify(token, 'secret')
        req.user = data
        if (data.role !== 'ADMIN')
            return res.status(401).json({
                message: `You are not allowed to take this action ${data.role}`,
            })
        return next()
    } catch (error) {
        next(error)
    }
}
module.exports = { basicUserRole, adminUserRole }
