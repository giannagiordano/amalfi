let socket; 
let coast;
let diver;
let fish;
let monika;
let gianna;

function preload(){
    coast = loadImage('assets/coast.png');
    diver = loadImage('assets/diver.png');
    fish = loadImage('assets/fish.png');
    monika = loadImage('assets/monika.png');
    gianna = loadImage('assets/gianna.png');

}

function setup(){
    createCanvas(windowWidth, windowHeight);
    background(coast)

    //open a connection to the server that has the socket server on it
    socket = io.connect('http://localhost:3000');
    //message coming in
    socket.on('mouse', newDrawing);
}

function newDrawing(data) {
    image(fish, data.x, data.y, 70, 50);
    image(gianna, data.a, data.b, gianna.width/5, gianna.height/5);
}

function mouseClicked(){
    console.log(mouseX + ',' + mouseY);

    var data = {
        x: mouseX,
        y: mouseY
    }
    //send message
    //name message and attach data
    socket.emit('mouse', data);

    image(diver, mouseX, mouseY, diver.width/4, diver.height/4);
}

function mouseDragged(){
    console.log(mouseX + ',' + mouseY);

    var data = {
        a: mouseX,
        b: mouseY
    }

    //send message
    //name message and attach data
    socket.emit('mouse', data);

    image(monika, mouseX, mouseY, monika.width/2, monika.height/2);

}

