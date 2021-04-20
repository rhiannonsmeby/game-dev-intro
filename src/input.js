import Game from "./game.js";
import Paddle from "./paddle.js";

// input aka instructions for the paddle
export default class InputHandler{

    constructor(paddle, game) {
        //moving the paddle
        document.addEventListener('keydown', (event) => {
            //alert(event.key);
            switch(event.key) {
                case 'ArrowLeft':
                    paddle.moveLeft();
                    break;
                
                case 'ArrowRight':
                    paddle.moveRight();
                    break;
                
                // pause the game
                case 'Escape':
                    game.togglePause();
                    break;

                //start the game
                case ' ':
                    game.start();
                    break;
            }
        });

        //stopping the paddle
        document.addEventListener('keyup', (event) => {
            // alert(event.key);
            switch(event.key) {
                case 'ArrowLeft':
                    if (paddle.speed < 0) paddle.stop();
                    break;
                
                case 'ArrowRight':
                    if (paddle.speed > 0) paddle.stop();
                    break;
            }
        });
    }
}