const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let x = 0;
let direction = 'right';

function draw() {
  if (direction === 'right') x += 5;
  else x -= 5;
  if (x >= 200) direction = 'left'
  if (x <= 0) direction = 'right'

  ctx.clearRect(0, 0, 300, 300)
  ctx.fillRect(x, 100, 100, 100);
  window.requestAnimationFrame(draw)
}

window.requestAnimationFrame(draw)