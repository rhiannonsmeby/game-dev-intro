import Paddle from "./paddle";

// input aka instructions for the paddle
export default class InputHandler{

    constructor(paddle) {
        document.addEventListener('keydown', (event) => {
            // alert(event.key);
            switch(event.key) {
                case 'ArrowLeft':
                    
                    break;
                
                case 'ArrowRight':
                    alert('move right');
                    break;
            }
        })
    }
}