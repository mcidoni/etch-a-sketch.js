console.log('loaded, buddy');
// select elements on page, canvas, button, etc
const canvas = document.querySelector('#etch-a-sketch');

const context = canvas.getContext('2d');

const shakeButton = document.querySelector('.shake');
const moveAmount = 10;

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
context.lineWidth = moveAmount;

// start draw
context.beginPath();
context.moveTo(x, y);
context.lineTo(x, y);

context.stroke();

// draw function
const draw = ({ key }) => {
  console.log(key);
  context.beginPath();
  context.moveTo(x, y);

  switch (key) {
    case 'ArrowUp':
      y -= moveAmount;
        break;
        case 'ArrowDown':
      y += moveAmount;
        break;
        case 'ArrowLeft':
      x -= moveAmount;
        break;
        case 'ArrowRight':
      x += moveAmount;
        break;
      default:
        break;
  }

  context.lineTo(x, y);
  context.stroke();
}

// key handler
const handleKey = (e) => {
  if (e.key.includes('Arrow')) {
    e.preventDefault();
    draw({ key: e.key })
  }
};


// clear (shake) function
const clearCanvas = () => {
  canvas.classList.add('shake');
  context.clearRect(0, 0, width, height);
  canvas.addEventListener('animationend', function() {
    canvas.classList.remove('shake');
    // remove event listener once animation is done running
  }, { once: true });
};

// event listener for arrow keys
window.addEventListener('keydown', handleKey);
shakeButton.addEventListener('click', clearCanvas);