import mongoose from 'mongoose'

const dbName = 'ecommerce_app'
const mongoDBUrl = `mongodb://127.0.0.1/${dbName}`
mongoose.connect(mongoDBUrl, {
    useUnifiedTopology: true,
})
export const connectDB = () => {
    const db = mongoose.connection
    db.once('open', () => {
        console.log('mongoDB connected')
    })
    db.on('error', console.error.bind(console, 'MongoDB connection error:'))
}
export default connectDB
