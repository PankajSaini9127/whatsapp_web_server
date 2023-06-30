import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    picture:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    sub :{
        type:Number,
        require:true
    }
});

 const user = mongoose.model('user',UserSchema);

 export default user;