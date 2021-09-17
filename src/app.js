import { connectDB } from '../config/db'

const express = require('express')

const app = express()
connectDB()
const PORT = 3000

app.listen(PORT, () => {
    console.log(`Ecommerce app is running @ ${PORT}`)
})

app.get('/', (req, res) => {
    res.send('Ecommerce App')
})
