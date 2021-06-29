const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let x = 100;
let y = 0;
let vertical = 'down';
let horizontal = 'right';

function draw() {
  if (horizontal === 'right') x += 5;
  else x -= 5;
  if (vertical === 'top') y -= 5;
  else y += 5;

  if (x >= 200) horizontal = 'left';
  if (x <= 0) horizontal = 'right';
  if (y >= 200) vertical = 'top';
  if (y <= 0) vertical = 'down';

  ctx.clearRect(0, 0, 300, 300);
  ctx.fillRect(x, y, 100, 100);
  window.requestAnimationFrame(draw);
}

window.requestAnimationFrame(draw);
