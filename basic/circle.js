const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
const x = 50 // x coordinate
const y = 50 // y coordinate
const radius = 25; // Arc radius

// 오른쪽 끝에서 시작
const startAngle = 0; // Starting point on circle

// 시계 방향으로 90도 아래까지
const degrees = 90;
const endAngle = (Math.PI / 180) * degrees; // End point on circle
const anticlockwise = false; // clockwise or anticlockwise

ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

// ctx.fill();

ctx.stroke();
