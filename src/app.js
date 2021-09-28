import { connectDB } from '../config/db'
import rootRouter from './Routes'

const express = require('express')

const app = express()
app.use(express.json())
connectDB()
const PORT = 3000
app.use('/', rootRouter)

app.listen(PORT, () => {
    console.log(`Ecommerce app is running @ ${PORT}`)
})

app.get('/', (req, res) => {
    res.send('Ecommerce App')
})
