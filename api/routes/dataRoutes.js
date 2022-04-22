import express from "express";
import Data from "../database/database.js";
import expressAsyncHandler from 'express-async-handler';
import { generateToken } from '../utils.js'



const dataRouter = express.Router()

dataRouter.post(
    '/', expressAsyncHandler(async (req, res) => {
        const newData = new Data({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        })
        const data = await newData.save()
        res.send({
            _id: data._id,
            name: data.name,
            email: data.email,
            message: data.message,
            token: generateToken(data)

        })
    })
)

export default dataRouter

