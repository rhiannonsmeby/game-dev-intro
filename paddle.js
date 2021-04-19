 export default class Paddle {

    constructor(gameWidth, gameHeight) {
        this.width = 150;
        this.height = 20;

        this.position = {
            x: (gameWidth - this.width) / 2,
            // we want to start the paddle at the bottom:
            // gameHeight - the height of the paddle - how much we want it off
            // the bottom: 10px here
            y: gameHeight - this.height - 10,
        }
    }

    // draw the paddle
    draw(ctx) {
        ctx.fillStyle = '#0ff';

        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    // update the paddle
    // takes in the change in time
    update(deltaTime) {
        // handle the first/ starting case
        if (!deltaTime) {
            return;
        }
        // code commented out to make paddle movement interactive
        // 5 pixels divided by how much time is in the past
        // this.position.x += 5 / deltaTime;
    }
}