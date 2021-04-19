 export default class Paddle {

    constructor(gameWidth, gameHeight) {
        this.width = 150;
        this.height = 20;

        this.maxSpeed = 7;
        this.speed = 0;

        this.position = {
            x: (gameWidth - this.width) / 2,
            // we want to start the paddle at the bottom:
            // gameHeight - the height of the paddle - how much we want it off
            // the bottom: 10px here
            y: gameHeight - this.height - 10,
        };
    }

    moveLeft() {
        this.speed = -this.maxSpeed;
    }

    moveRight() {
        this.speed = this.maxSpeed;
    }

    stop() {
        this.speed = 0;
    }

    // draw the paddle
    draw(ctx) {
        ctx.fillStyle = '#0ff';

        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    // update the paddle
    // takes in the change in time
    update(deltaTime) {
        // code commented out to make paddle movement interactive
        // 5 pixels divided by how much time is in the past
        // this.position.x += 5 / deltaTime;
        this.position.x += this.speed;

        //make the paddle stop when it hits the edge of the screen
        if(this.position.x < 0) this.position.x = 0;
        if(this.position.x > (800 - this.width)) this.position.x = (800 - this.width);
    }
}