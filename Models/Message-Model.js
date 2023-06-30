import mongoose from "mongoose";

const MessageSchema = mongoose.Schema(
  {
    senderID: {
      type: String,
      require: true,
    },
    receiverId: {
      type: String,
      require: true,
    },
    conversationID: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
    msg: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);


const MessageModel = mongoose.model("message",MessageSchema);

export default MessageModel;