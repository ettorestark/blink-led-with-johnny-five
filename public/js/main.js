const socket = io();

let switchLed = document.getElementById('switch');
var state = false;

switchLed.addEventListener('click', toggleLed);

function toggleLed() {
	if(!state) {
		socket.emit('turn_on');
		state = !state;
	}else {
		console.log(state);
		socket.emit('turn_off');
	}
}