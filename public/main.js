const socket = io();

let turnOn = document.getElementById('turnOn');
let turnOff = document.getElementById('turnOff');

turnOn.addEventListener('click', () => {
	socket.emit('turn_on');
});

turnOff.addEventListener('click', () => {
	socket.emit('turn_off');
});