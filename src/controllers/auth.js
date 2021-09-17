const signUp = (req, res) => {
    const userData = req.body

    if (!userData.email) {
        return res.status(404).json({
            message: 'email field is missing',
        })
    }
}

module.exports = signUp
