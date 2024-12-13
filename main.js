const CANVAS_SIZE = 720;
const container = document.querySelector('.container');

function createCanvas(squares) {
    let squareSize = CANVAS_SIZE / squares;
    let totalSquares = squares**2;
    
    for(let i = 0; i < totalSquares; i++) {
            let square = document.createElement('div');
            square.setAttribute('class', 'square');

            square.style['width'] = squareSize + 'px';
            square.style['height'] = squareSize + 'px';

            square.addEventListener('mouseenter', () =>{
                square.style['backgroundColor'] = '#cccccc';
            });
            container.appendChild(square);
    }
}

createCanvas(4);