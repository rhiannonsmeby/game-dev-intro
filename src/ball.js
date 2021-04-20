import {detectCollision} from './collisionDetection.js';

export default class Ball {

    constructor(game) {
        this.image = document.getElementById('img_ball');

        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.game = game;
        this.size = 16;
        this.reset();
    }

    reset() {
        this.position = {x: 10, y: 400};
        this.speed = {x: 4, y: -2};
    }

    draw(ctx) {
        //draw image of ball
        //moving the ball
        ctx.drawImage(
            this.image, 
            this.position.x, 
            this.position.y, 
            this.size, 
            this.size
        );

    }

    //moving the ball
    update(deltaTime) {
        //console.log(this.game.paddle.position.x)

        this.position.x += this.speed.x;
        this.position.y += this.speed.y;


        // wall on left or right
        if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
            this.speed.x = -this.speed.x;
        }

        //wall on top
        if (this.position.y < 0) {
            this.speed.y = -this.speed.y
        }

        //bottom of the game
        if (this.position.y + this.size > this.gameHeight) {
            this.game.lives--;
            this.reset();
        }

        // commented out because we refactored to include bricks in the collision
        //Detection component!
        //check collison with paddle
        // let bottomOfBall = this.position.y + this.size;
        // let topOfPaddle = this.game.paddle.position.y;
        // let leftSideOfPaddle = this.game.paddle.position.x;
        // let rightSideOfPaddle = this.game.paddle.position.x + this.game.paddle.width;

        // if (
        //     bottomOfBall >= topOfPaddle && 
        //     this.position.x >= leftSideOfPaddle && 
        //     this.position.x + this.size <= rightSideOfPaddle
        // ) {
        //     this.speed.y = -this.speed.y;
        //     this.position.y = this.game.paddle.position.y - this.size;
        // }

        if (detectCollision(this, this.game.paddle)) {
            this.speed.y = -this.speed.y;
            this.position.y = this.game.paddle.position.y - this.size;
        }
    }
}