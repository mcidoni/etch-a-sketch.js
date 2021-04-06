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

// create random starting points on canvas
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);


context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 10;

// start draw
context.beginPath();
context.moveTo(x, y);
context.lineTo(x, y);

context.stroke();

// draw function

// key handler
const handleKey = () => {
  console.log("HANDLING DE KEY BRO")
}


// clear (shake) function

// event listener for arrow keys
window.addEventListener('keydown');