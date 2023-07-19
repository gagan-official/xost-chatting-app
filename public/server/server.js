const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const {Server} = require("socket.io"); 

app.use(cors());

const server = http.createServer(app);

const io = new Server(server,{
    cors:{
        origin: "http://localhost:3000",
        methods:["GET","POST"],
    },
});

io.on("connection",(socket)=>{
    console.log(`user connected: ${socket.id}`)

    socket.on("selfRoom",(data)=>{
        socket.join(data)
        console.log(`room of : ${data.of} & join by : ${data.by}`)
    })

    socket.on("sendMsg",(res)=>{
        console.log(res)
    })

    socket.on("disconnect",()=>{
        console.log(`user dissconnected: ${socket.id}`)
    });
});

server.listen(3001,()=>{
    console.log("server running!");
})