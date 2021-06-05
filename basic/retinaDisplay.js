function drawRetinaCanvas() {
  const canvas = document.getElementById('retina-canvas');
  const ctx = canvas.getContext('2d');

  // retina display를 위해 두 배로 키워서 600px로 그린 다음 300px로 다시 줄인다.
  ctx.scale(2, 2);
  canvas.style.width = '300px';
  canvas.style.height = '300px';

  ctx.beginPath();

  const startAngle = 0; // Starting point on circle
  const degrees = 360;
  const endAngle = (Math.PI / 180) * degrees; // End point on circle

  ctx.arc(150, 150, 100, startAngle, endAngle);
  ctx.lineWidth = 20;
  ctx.strokeStyle = 'black';
  ctx.stroke();
}

function drawCanvas() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  ctx.beginPath();

  const startAngle = 0; // Starting point on circle
  const degrees = 360;
  const endAngle = (Math.PI / 180) * degrees; // End point on circle

  ctx.arc(150, 150, 100, startAngle, endAngle);
  ctx.lineWidth = 20;
  ctx.strokeStyle = 'black';
  ctx.stroke();
}

drawRetinaCanvas();
drawCanvas();
