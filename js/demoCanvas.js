const canvas=document.querySelector('canvas');
const ctx=canvas.getContext('2d');

ctx.lineWidth=5;

ctx.beginPath();
ctx.fillStyle='yellow';
ctx.strokeStyle='orange';
ctx.arc(800,200,70,0,2*Math.PI);
ctx.stroke();
ctx.fill();

ctx.strokeStyle='black';
ctx.beginPath();
ctx.rect(100,800,200,200);
ctx.stroke();

ctx.fillStyle='black';
ctx.beginPath();
ctx.rect(175,900,50,100);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='red';
ctx.moveTo(200,700);
ctx.lineTo(310,800);
ctx.lineTo(90,800);
ctx.lineTo(200,700);
ctx.closePath()
ctx.fill();