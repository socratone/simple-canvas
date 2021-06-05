const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(250, 50);

ctx.quadraticCurveTo(240, 160, 150, 100);
ctx.bezierCurveTo(180, 200, 50, 150, 50, 50)

ctx.stroke();