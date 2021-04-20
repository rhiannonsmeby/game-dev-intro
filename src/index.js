import Game from './game.js';

//this file starts a new game

// how to draw something on the canvas: 
let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext('2d');

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);

let lastTime = 0;

function gameLoop(timestamp) {
    //calculate how much time had passed
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    // everytime you redraw onto the canvas, what was previously on the canvas is
    // still there
    // we use clear rect to mitigate this
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
   
    game.update(deltaTime);
    game.draw(ctx);

    // every time this runs it will say when the next frame is ready call this 
    // gameLoop again and pass it the time stamp
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);