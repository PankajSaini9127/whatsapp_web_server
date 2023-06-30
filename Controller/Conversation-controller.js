import Conversation from "../Models/ConversationModel.js";
import MessageModel from "../Models/Message-Model.js";

export async function newConversation(req,res){
    try {
      const senderID = req.body.senderID;
      const receiverID = req.body.receiverID;

      const exits = await Conversation.findOne({members:{$all:[receiverID,senderID]}});

      if(exits){
        return res.send({message:"User already exits",user:exits})
      }

      const conversation = new Conversation({members:[senderID,receiverID]});

     const newConversation =  await conversation.save();
     
     return res.status(200).send({message:"Conversation created successfully",user:conversation})

    } catch (error) {
        console.log("error While calling New-conversation API",error);
        return res.status(500).send(error)
    }
};

export async function sendMessage(req,res){
  try {
    // console.log(req.body)
    const newmsg = await new MessageModel(req.body);
    

    await newmsg.save();

    const conversationmsg = await Conversation.findByIdAndUpdate(req.body.conversationID,{message:req.body.msg})
    // console.log(conversationmsg)
    // if(exits){
      return res.send(newmsg)
    // }
    
  } catch (error) {
    console.log("error while calling send Message  API",error);
    return res.status(500).send(error)
  }
}

export async function getMessages(req,res){
  try {
    const response = await MessageModel.find({conversationID:req.params.id});
    response && res.send(response);
  } catch (error) {
    console.log("Error while calling get messasge API", error)
    return res.status(500).send(error)
  }
}