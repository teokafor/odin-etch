const CANVAS_SIZE = 720;
const container = document.querySelector('.container');

const button = document.querySelector('.btn');
button.addEventListener('click', () => {
    let size = prompt('Enter new grid size:');

    if(size > 100) size = 2;
    clearCanvas();
    createCanvas(size);
});

function clearCanvas() {
    let squares = document.querySelectorAll('.square').forEach(e => e.remove());;

}

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