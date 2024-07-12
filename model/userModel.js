import mongoose from "mongoose";


const EmployeeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    number:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    },
   
    role:{
        type: String,
        required: true
    }
})


export default mongoose.model("List of Employee", EmployeeSchema);