const express = require('express');
const path = require('path');
const five = require('johnny-five');

//Initialization
const app = express();

//Settings 
app.set('port', 3000);

//Static files
app.use(express.static( path.join(__dirname, 'public') ));

//Start the server 
const server = app.listen(app.get('port'), () => {
	console.log('Server on port ', app.get('port'));
});

//Aduino board

var led;
const board = new five.Board();
board.on('ready', () => {
	led = new five.Led(13);
});

const SocketIO = require('socket.io');
const io = SocketIO(server);

io.on('connection', (socket) => {
	socket.on('turn_on', (data) => {
		led.on();
		console.log('Led turn on');
	});

	socket.on('turn_off', (data) => {
		led.off();
		console.log('Led turn off');
	});
});
