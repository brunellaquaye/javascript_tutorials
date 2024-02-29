// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class Shape{
    constructor(x, y, velX, velY) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        
      }  } 



class Ball extends Shape{
    constructor(x, y, velX, velY, color, size,exists) {
       super(x, y, velX, velY);
       this.color = color;
       this.size = size;
       this.exists = true;
      }
      draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
      }
      update() {
        //this will check if the ball has reached the egde and change it's direction to the opposite direction by changing the velocity to a positive value or vice versa
        //if the ball is going over the right
        //we add the size of the ball so that it will bounce of immediately it touches not that  half of the ball will go over before bouncing over
        if ((this.x + this.size) >= width) {
          this.velX = -(this.velX);
        }
      //if the ball is going over the left
        if ((this.x - this.size) <= 0) {
          this.velX = -(this.velX);
        }
        //if the ball is going over the bottom
        if ((this.y + this.size) >= height) {
          this.velY = -(this.velY);
        }
      //if the ball is going over the top
        if ((this.y - this.size) <= 0) {
          this.velY = -(this.velY);
        }
      
        this.x += this.velX;
        this.y += this.velY;
      }
      collisionDetect() {
        for (const ball of balls) {
          if (!(this == ball) && ball.exists) {
            const dx = this.x - ball.x;
            const dy = this.y - ball.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
      
            if (distance < this.size + ball.size) {
              ball.color = this.color = randomRGB();
            }
          }
        }
      }
      
      
    }
    class EvilCircle extends Shape{
        constructor(x,y){
            super(x,y,20,20);
            this.color = white;
            this.size = 10;
    //this is a keydown event listener that will check for which key is pressed and move the evil circle accordingly provided the keys are the specified keys.
            window.addEventListener("keydown",(e)=>{
                switch(e.key){
                    case "a":
                        this.x -= this.velX;
                        break;
                    case "d":
                        this.x += this.velX;
                        break;
                    case "w":
                        this.y -= this.velY;
                        break;
                    case "s":
                        this.y += this.velY;
                        break;
      }
    });
        
    
                }
                draw() {
                    ctx.beginPath();
                    ctx.lineWidth = 3;
                    ctx.strokeStyle = this.color;
                    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
                    ctx.stroke();
                  }
                  checkBounds() {
                    if ((this.x + this.size) >= width) {
                      this.x -=this.size;
                    }
                    if ((this.x - this.size) <= 0) {
                      this.x +=this.size;
                    }
                    if ((this.y + this.size) >= height) {
                      this.y -=this.size;
                    }
                    if ((this.y - this.size) <= 0) {
                      this.y +=this.size;
                    }               
                  }
                  collisionDetect() {
                    for (const ball of balls) {
                      if (!(this == ball) && ball.exists) {
                        const dx = this.x - ball.x;
                        const dy = this.y - ball.y;
                        const distance = Math.sqrt(dx * dx + dy * dy);
                  
                        if (distance < this.size + ball.size) {
                          ball.color = this.color = randomRGB();
                        }
                      }
                    }
                  }
            }
    
    
    //we create an array of of balls and use the while loop to add new objects of balls to it anytime the number of balls is less than 25.
    const balls = [];

while (balls.length < 25) {
  const size = random(10, 20);
  const ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the edge of the canvas, to avoid drawing errors
    //we will use the random function to create new values for drawing the ball at new positions.
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size,
  );

  balls.push(ball);
}
function loop() {
    ctx.fillStyle = "rgb(0 0 0 / 25%)";
    ctx.fillRect(0, 0, width, height);
  
    for (const ball of balls) {
      ball.draw();
      ball.update();
      ball.collisionDetect();
    }
  
    requestAnimationFrame(loop);
  }
  
loop();  



 /*class Ball extends Shape{
    constructor(x, y, velX, velY, color, size) {
        super(x, y, velX, velY, color, size);
        this.color = color;
        this.size = size;
        this.exists = true;
    }
 }*/
    