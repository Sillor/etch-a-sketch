const DEFAULT_SIZE = 16;

let grid = document.querySelector('.grid-container');
let slider = document.querySelector('#myRange');
let sliderValue = document.querySelector('.slider-value');
let eraseButton = document.querySelector('#erase');
let modeButton = document.querySelector('#mode');

let mode = 'black';

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return rgbToHex(r, g, b);
}

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
            if (mode === 'black') {
                gridItem.style.backgroundColor = 'black';
            }
            else  {
                gridItem.style.backgroundColor = `${getRandomColor()}`;
            }
        });
    });
}

setGrid(DEFAULT_SIZE);

slider.oninput = function () {
    setGrid(this.value);
    sliderValue.innerHTML = this.value;
}

eraseButton.onclick = function () { setGrid(slider.value); }

modeButton.onclick = function () {
    if (mode === 'black') {
        mode = 'random';
        modeButton.innerHTML = 'Mode: Random';
    }
    else {
        mode = 'black';
        modeButton.innerHTML = 'Mode: Black';
    }
}