let grid = document.querySelector('.grid-container');
let gridSquares = grid.children;

// initialize a 16 x 16 grid 

function generateGrid(){
    grid.style.gridTemplateColumns = "repeat(16, auto)";
    grid.style.gridTemplateRows = "repeat(16, auto)";

    for (i = 0; i < 256; i++) {
        let div = document.createElement('div');
        div.classList.add('grid-square-style');
        grid.appendChild(div);
    }

    // add event listener to each grid square 
    for (i = 0; i < 256; i++) {
        gridSquares[i].addEventListener('mouseover', addRandomColor);
    }
}

generateGrid();

// generate random rgb values

function generateRandomNumber() {
    return Math.floor(Math.random() * (256 - 0 + 1)) + 0;
}

function generateRandomR() {
    return generateRandomNumber();
}

function generateRandomG() {
    return generateRandomNumber();
}

function generateRandomB() {
    return generateRandomNumber();
}

function addRandomColor(e) {
    let r = generateRandomR();
    let g = generateRandomG();
    let b = generateRandomB();
    e.target.style.backgroundColor = `rgba(${r}, ${g}, ${b})`;
}

// reset grid when clear button is clicked 
let clearBtn = document.getElementById('clear');

function clearGrid() {
    for (i = 0; i < 256; i++) {
        gridSquares[i].style.backgroundColor = "white";
    }
}

// add event listener to clear the grid on click 
clearBtn.addEventListener('click', clearGrid);

// resize grid when resize button is clicked 
let resizeBtn = document.getElementById('resize');

// helper function to reset grid to have 0 divs/children
function resetGrid() {
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.lastChild);
    }
}

function resizeGrid() {
    resetGrid();

    let newGridSize = prompt("Please enter a new grid size: ");
    let gridTotal = newGridSize * newGridSize;

    grid.style.gridTemplateColumns = `repeat(${newGridSize}, auto)`;
    grid.style.gridTemplateRows = `repeat(${newGridSize}, auto)`;

    for (i = 0; i < gridTotal; i++) {
        let div = document.createElement('div');
        div.classList.add('grid-square-style');
        grid.appendChild(div);
    }  

    // add event listener to each grid square 
    for (i = 0; i < gridTotal; i++) {
        gridSquares[i].addEventListener('mouseover', addRandomColor);
    }
}

// add event listener to resize grid on click 
resizeBtn.addEventListener('click', resizeGrid);