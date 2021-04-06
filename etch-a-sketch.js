console.log('loaded, buddy');
// select elements on page, canvas, button, etc
const canvas = document.querySelector('#etch-a-sketch');

const context = canvas.getContext('2d');

const shakeButton = document.querySelector('.shake');


// setup html canvas

// const { width } = canvas;
// const { height } = canvas;

// make variables called height and width from the same properties on canvas
const { width, height } = canvas;

context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 10;

// start draw
context.beginPath();
context.moveTo(200, 200);
context.lineTo(200, 200);

context.stroke();

// draw function

// key handler

// clear (shake) function

// event listener for arrow keys