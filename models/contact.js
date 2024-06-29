import mongoose, {Schema} from "mongoose";
let s= new Schema({
    description:{
        type:String,
        required:true
    }
    ,category:{
        type:String,
        required:true
    },
    due_date:{
        type:String,
        required:true
    }
});
export const Contact = mongoose.model("Contact",s);