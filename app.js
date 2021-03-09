const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName('jsColors');
const range = document.getElementById('jsRange');
const mode = document.getElementById('jsMode');
const saveBtn = document.getElementById('jsSave');

const INITIAL_COLOR = '#2c2c2c';
const CANVAS__SIZE = 700;

canvas.width = CANVAS__SIZE;
canvas.height = CANVAS__SIZE;

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, CANVAS__SIZE, CANVAS__SIZE);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

function stopPainting(){
  painting = false;
}

function startPainting(){
  if (filling){
  painting = false;
  } else {
    painting = true;
  }
}

function onMouseMove(event){
  const x = event.offsetX;
  const y = event.offsetY;
  if(!painting){
    ctx.beginPath();
    ctx.moveTo(x,y);
  } else {
    ctx.lineTo(x,y);
    ctx.stroke();
  }
}

function handleColorClick(event){
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function handleRangeChange(event){
  const size = event.target.value
  ctx.lineWidth = size;
}

function handleModeClick(){
  if(filling === true){
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = 'Paint';

  }
}

function handleCanvasClick(){
  if(filling){
  ctx.fillRect(0, 0, CANVAS__SIZE, CANVAS__SIZE);
  }
}

function hendleCM(event){
  console.log(event);
}

function handleSaveClick(){
  const image = canvas.toDataURL();
  const link = document.createElement('a');
  link.href = image;
  link.download = 'PaintJS[🎨]';
  link.click();
}

canvas.addEventListener('mousemove', onMouseMove);
canvas.addEventListener('mousedown', startPainting);
canvas.addEventListener('mouseup', stopPainting);
canvas.addEventListener('mouseleave', stopPainting);
canvas.addEventListener('click', handleCanvasClick);
canvas.addEventListener('contextmenu', hendleCM);

Array.from(colors).forEach(potator => potator.addEventListener('click', handleColorClick))

range.addEventListener('input', handleRangeChange);

mode.addEventListener('click', handleModeClick);

saveBtn.addEventListener('click', handleSaveClick);