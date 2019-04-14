//import express module
var express = require('express');

var app = express();
//display sketch at localhost:3000
var server = app.listen(3000);

//show 'public' folder
app.use(express.static('public'));

console.log("my socket server is running")

//import socket module
var socket = require('socket.io');

//call the socket function with the server
//server is displaying on localhost:3000
var io = socket(server);

//set-up a connection event
//call connection function
io.sockets.on('connection', newConnection);

function newConnection(socket){
    //every new connection gets an ID number
    //useful for tracking over time
    console.log('new connection:' + socket.id);

    //if there is a message called mouse, trigger this function
    socket.on('mouse', mouseMSG);

    function mouseMSG(data) {
        //call the broadcast.emit function to send the message back out
        socket.broadcast.emit('mouse', data);
        //refers to global socket, which also includes the socket that sent the message
        //io.sockets.emit('mouse', data);
    }




}
