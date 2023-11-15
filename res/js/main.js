const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


let x = 10;
let y = 10;
let xVelocity = 0.5;
let yVelocity = 0.5;
 
window.addEventListener("resize", () => {
    changeCanvasSize ();
});
 
window.onload = () => {
    changeCanvasSize ();
}
 
function changeCanvasSize () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
 
setInterval(() => {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  if (y + 60 >= canvas.height || y <= 0) {
    yVelocity *= -1;
  }
  if (x + 60 >= canvas.width || x <= 0){
    xVelocity *= -1;
  }
  x+= xVelocity;
  y+= yVelocity;
  ctx.fillStyle = "red";
  ctx.fillRect(x, y, 60, 60);
}, 0.1);











/*
ctx.fillStyle = "red";
/*ctx.fillRect(50, 200, 80, 140);


ctx.strokeStyle = "black";
/*ctx.strokeRect(5, 5, 100, 100);
/*
// round
ctx.beginPath();
ctx.arc(300, 200, 140, 0, 2 * Math.PI);
ctx.stroke();
// mouth
ctx.beginPath();
ctx.arc(300, 240, 80, 0, 1 * Math.PI);
ctx.stroke();
// all eyez on me
ctx.beginPath();
ctx.moveTo(240, 120)
ctx.lineTo(240, 120);
ctx.lineTo(240, 200)
ctx.stroke();
ctx.beginPath();
ctx.moveTo(355, 120)
ctx.lineTo(355, 120);
ctx.lineTo(355, 200)
ctx.stroke();
// shake that body
ctx.beginPath();
ctx.moveTo(300, 340);
ctx.lineTo(300, 500);
ctx.stroke();
// put your hand up in the air L
ctx.beginPath();
ctx.moveTo(300, 400);
ctx.lineTo(270, 430);
ctx.stroke();
// put your hand up in the air R
ctx.beginPath();
ctx.moveTo(300, 400);
ctx.lineTo(500, 300);
ctx.stroke();
// my legs hurt R
ctx.beginPath();
ctx.moveTo(300, 500);
ctx.lineTo(340, 600);
ctx.stroke();
// my legs hurt L
ctx.beginPath();
ctx.moveTo(300, 500);
ctx.lineTo(260, 600);
ctx.stroke();
// maxwells silver hammer
ctx.beginPath();
ctx.moveTo(498, 260);
ctx.lineTo(500, 360);
ctx.stroke();
ctx.strokeRect(480, 247, 32, 12);
// AliG indahouse
ctx.strokeRect(780, 447, 420, 270);

ctx.beginPath();
ctx.moveTo(770, 447);
ctx.lineTo(985, 210);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(1210, 447);
ctx.lineTo(985, 210);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(770, 447);
ctx.lineTo(1210, 447);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(985, 210);
ctx.lineTo(1200, 210);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(1210, 447);
ctx.lineTo(1425, 447);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(1200, 210);
ctx.lineTo(1425, 447);


ctx.beginPath();
ctx.moveTo(1420, 447);
ctx.lineTo(1420, 720);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(1420, 717);
ctx.lineTo(1000, 717);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(1420, 717);
ctx.lineTo(1000, 717);
ctx.stroke();
*/
