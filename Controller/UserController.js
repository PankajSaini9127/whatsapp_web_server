import User from "../Models/UserModel.js";

export async function add_user(req,res){
    try {
   const exits = await User.findOne({sub:req.body.sub});

   if(exits){
     return res.status(200).send({success:true,message:"user already exits",user:exits})
   }

   const newUser = new User(req.body);
   await newUser.save();

   return res.status(200).send({success:true,message:"USER created successfully",user:newUser});

    } catch (error) {
        console.log("Error While Insert User Info in Database",error);
        return res.status(500).send(error)
    }
};

export async function get_user (req,res){
    try {
        const users = await User.find({});

        return res.send(users)
    } catch (error) {
        console.log("Error while call get user API",error)
        return res.status(500).send(error)
    }
}