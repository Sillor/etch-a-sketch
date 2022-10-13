const DEFAULT_SIZE = 8;

let grid = document.querySelector('.grid-container');

function resetGrid() {
    grid.textContent = '';
}

function setGrid(size) {
    resetGrid();
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridItem.setAttribute('style', `height: ${100 / size}%`);
            gridItem.setAttribute('style', `width: ${100 / size}%`);
            grid.appendChild(gridItem);
        }
    }
    let gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(gridItem => {
        gridItem.addEventListener('mouseover', () => {
            gridItem.style.backgroundColor = 'black';
        });
    });
}

setGrid(DEFAULT_SIZE);

let slider = document.querySelector('#myRange');
let sliderValue = document.querySelector('.slider-value');

slider.oninput = function() {
    setGrid(this.value);
    sliderValue.innerHTML = this.value;
}