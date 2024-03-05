//here,we create a reference to the canvas elemrnt
const canvas = document.querySelector(".myCanvas");
//we set the height and width of the canvas to that of the browser's
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

const ctx = canvas.getContext("2d");
//this makes the whole sceen black by drawing a black rectangle that has it's parameters as the screen
ctx.fillStyle = "rgb(0 0 0 )";
ctx.fillRect(0, 0, width, height);

//this draws a red rectangle at the top left corner with the specified parameters
//the drawing on the canvas will follow the order here.
ctx.fillStyle = "rgb(255 0 0)";
ctx.fillRect(50, 50 , 100, 150);

ctx.fillStyle = "rgb(0 255 0)";
ctx.fillRect(75, 75, 100, 100);

ctx.fillStyle = "rgb(255 0 255 / 75%)";
ctx.fillRect(25, 100, 175, 50);

//this will draw a stroke rectangle 
ctx.strokeStyle = "rgb(255 255 255)";
ctx.strokeRect(25, 25, 175, 200);

//this is a function that will convert degrees to radians 
function degToRad(degrees) {
    return (degrees * Math.PI) / 180;
  }

  //drawing something more compicated using the path methods
  //triangle
  ctx.fillStyle = "white";
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
const triHeight = 50 * Math.tan(degToRad(60));
ctx.lineTo(100, 50 + triHeight);
ctx.lineTo(50, 50);
ctx.fill();

//circle using the arc
ctx.fillStyle = "rgb(0 0 255)";
ctx.beginPath();
ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
ctx.fill();

ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(200, 106, 50, degToRad(-45), degToRad(45), true);
ctx.lineTo(200, 106);
ctx.fill();


  
