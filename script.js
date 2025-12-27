
function checkPasscode(){
const input=document.getElementById("passcode").value;
const error=document.getElementById("error");
//const today=new Date();
//const unlock=new Date("2026-01-01");

//if(today<unlock){
//error.innerHTML="⏳ Opens on 1st January 2026 🧿";
//return;
//}

if(input==="Chubu2026" || input==="CHUBU2026" || input==="chubu2026"){
window.location.href="fireworks.html";
}else{
error.innerHTML="Try again my love 🥺💜";
}
}

// Fireworks hearts
const canvas=document.getElementById("canvas");
if(canvas){
const ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
let hearts=[];

function Heart(){
this.x=Math.random()*canvas.width;
this.y=canvas.height;
this.size=Math.random()*20+10;
this.speed=Math.random()*2+1;
}

function drawHeart(h){
ctx.fillStyle="rgba(200,100,255,0.8)";
ctx.beginPath();
ctx.moveTo(h.x,h.y);
ctx.bezierCurveTo(h.x-h.size,h.y-h.size,h.x-2*h.size,h.y+h.size,h.x,h.y+2*h.size);
ctx.bezierCurveTo(h.x+2*h.size,h.y+h.size,h.x+h.size,h.y-h.size,h.x,h.y);
ctx.fill();
}

function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);
if(hearts.length<40) hearts.push(new Heart());
hearts.forEach(h=>{
h.y-=h.speed;
drawHeart(h);
});
requestAnimationFrame(animate);
}
animate();
}
