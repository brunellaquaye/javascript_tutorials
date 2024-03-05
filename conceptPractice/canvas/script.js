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

