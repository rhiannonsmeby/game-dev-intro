import Paddle from './paddle.js';
import InputHandler from './input.js';
import Ball from './ball.js';

// how to draw something on the canvas: 
let canvas = document.getElementById("gameScreen");

let ctx = canvas.getContext('2d');

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;



// setting the color of the rectangle created below to red
// ctx.fillStyle = '#f00';
// creating a rectangle starting at 20 on the x axis, 20 on the y axis
// width of 100 and height of 100
// ctx.fillRect(20,20,100,100);

// smaller blue rect at different coordinates 
// ctx.fillStyle = '#00f';
// ctx.fillRect(200,200,50,50);

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
let ball = new Ball(GAME_WIDTH, GAME_HEIGHT);

// instantiate input handler before the game loop
new InputHandler(paddle);

// the draw needs to have the context of our game
paddle.draw(ctx);

// next step is going to be moving the paddle on the screen:
// need to develop a game loop: something that runs every frame, updates all
// of the objects, redraws them in their new position, and moves on to the next
// frame

let lastTime = 0;

function gameLoop(timestamp) {
    //calculate how much time had passed
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    // everytime you redraw onto the canvas, what was previously on the canvas is
    // still there
    // we use clear rect to mitigate this
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    // update our paddle
    paddle.update(deltaTime);
    paddle.draw(ctx);

    //update our ball
    ball.update(deltaTime);
    ball.draw(ctx);

    // every time this runs it will say when the next frame is ready call this 
    // gameLoop again and pass it the time stamp
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);