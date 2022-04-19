import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
    name: {type: String, required: true, unique:true},
    email: {type: String, required: true, unique:true},
    message: {type: String, required: true, unique:true}
},
{
    timestamps: true
}
)

const Data = mongoose.model('Data', dataSchema)

export default Data
