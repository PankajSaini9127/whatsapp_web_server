
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import db from './Connection/db.js';
import http from 'http';


//socket.io
import {Server} from 'socket.io';

//route
import UserRoute from './Routes/UserRoute.js'
import conversation from './Routes/Conversation-Route.js'
import File_route from './Routes/File-route.js';

const app = express();

const server = http.Server(app);

const io = new Server(server,{
    cors:{
        origin:'http://localhost:3000',
        methods:["GET","POST"]
    }
});

const users = [];

function addUser(data,socketID){
    !users.some(user=>user._id === data._id) && users.push({...data,socketID})
}

io.on('connection',(socket)=>{

    socket.on("adduser",data=>{
        addUser(data,socket.id);
        socket.emit("getuser",users)

     
    });


    socket.on("send message",message=>{
        const receiver = users.find(user=>user._id === message.receiverId)
        receiver && 
        socket.to(receiver.socketID).emit('getMessage',message)
    })
})


db();

const Port = process.env.PORT || 8080;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use(cors());

app.use('/user',UserRoute);

app.use('/conversation',conversation);

app.use("/file",File_route);

app.use('/uploads',express.static('uploads'))

app.get('/',function(req,res){
    res.send("Whatsapp Web Server Started")
})



server.listen(Port,()=>{
    console.log(`Whatsapp Web server is listen on Port No : ${Port}`)
})
