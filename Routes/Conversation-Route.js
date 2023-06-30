import express from "express";
import { getMessages, newConversation,sendMessage } from "../Controller/Conversation-controller.js";


const Router = express.Router();

Router.post('/add',newConversation);

Router.post('/send-message',sendMessage)

Router.get('/get-message/:id',getMessages)

export default Router;

