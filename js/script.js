const GRID_SIZE = 8;

let grid = document.querySelector('.grid-container');

for (let i = 0; i < GRID_SIZE; i++) {
    for (let j = 0; j < GRID_SIZE; j++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.setAttribute('style', `height: ${100 / GRID_SIZE}%`);
        gridItem.setAttribute('style', `width: ${100 / GRID_SIZE}%`);
        grid.appendChild(gridItem);
    }
}

let gridItems = document.querySelectorAll('.grid-item');




gridItems.forEach(gridItem => {
    
    gridItem.addEventListener('mousedown', () => {
        gridItem.style.backgroundColor = 'black';
    });
});