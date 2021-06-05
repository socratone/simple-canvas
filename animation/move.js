const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let start = null;

function draw(timestamp) {
  if (!start) start = timestamp;
  const progress = timestamp - start;
  const x = progress / 10; // 1초에 100만큼 이동
  ctx.clearRect(0, 0, 300, 300)
  ctx.fillRect(x, 100, 100, 100);
  if (200 > x) {
    window.requestAnimationFrame(draw)
  }
}

window.requestAnimationFrame(draw)