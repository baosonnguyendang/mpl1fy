import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import seedRouter from './routes/seedRoutes.js'
import dataRouter from './routes/dataRoutes.js'
import infoRouter from './routes/infoRoutes.js'

dotenv.config()
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }).then(() => {
    console.log('connected to db')
}).catch((err) => {
    console.log(err.message)
})

const app = express()
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/seed', seedRouter)
app.use('/api', dataRouter)
app.use('/api/info', infoRouter)


app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message })

})


const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`server at http://localhost:5000`)
})