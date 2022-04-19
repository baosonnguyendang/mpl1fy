import express from 'express'
import Data from '../database/database.js'

const infoRouter = express.Router()

infoRouter.get('/', async (req,res)=>{
    Data.find(function(err, foundData){
        res.send(foundData)
    })
})
export default infoRouter