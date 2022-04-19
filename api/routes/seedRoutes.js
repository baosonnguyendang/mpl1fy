import express from 'express'
import Data from '../database/database.js'
import data from '../data.js'
const seedRouter = express.Router()

seedRouter.get('/', async (req,res)=>{
    await Data.remove({})
    const createdData = await Data.insertMany(data)
    res.send({createdData})
})
export default seedRouter