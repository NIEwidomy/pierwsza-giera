
const canv = document.querySelector('canvas');
const ctx = canv.getContext('2d');

const ch = 500;
const cw = 1000;

canv.width = cw;
canv.height = ch;



const blockdem = 25;

let bdX = ch / 2 - blockdem / 2;

let bdY = cw / 2 - blockdem / 2;

const apllesize = 20;

let apllepoX = ch / 2 - apllesize/2;
let apllepoY = cw / 2 - apllesize/2;

function drawblock() {
	ctx.fillStyle = '#ffffff';
	ctx.fillRect( bdX, bdY, blockdem, blockdem);
	ctx.fillRect( apllepoY, apllepoX, apllesize, apllesize);
}

function aplle(){
	apllepoX = Number(Math.round(Math.random() * 500));
	apllepoY = Number(Math.round(Math.random() * 1000 ));
}

 topCanvas = canv.offsetTop;
 LeftCanvas = canv.offsetLeft;

 function check(){
	 if (ch / 2 - blockdem / 2 == ch / 2 - apllesize/2 || cw / 2 - apllesize/2 == cw / 2 - blockdem / 2){
		 alert('działa');
	 }
 }
 
function playerpozition(e){
	bdY = e.clientY - topCanvas - blockdem / 2;
	bdX = e.clientX - LeftCanvas - blockdem / 2;
}

canv.addEventListener("mousemove", playerpozition)

function table(){
	ctx.fillStyle = 'black';
	ctx.fillRect(0,0, cw,ch);
}
function fps(){
	table();
	drawblock();
	check();
}

setInterval(fps, 1000/60);

setInterval(aplle, 5000);