let grid = document.querySelector('.grid-container');
let gridSquares = grid.children;
// create a 16 x 16 grid 
// 16 rows x 16 columns

grid.style.gridTemplateColumns = "repeat(16, auto)";
grid.style.gridTemplateRows = "repeat(16, auto)";

for (i = 0; i < 256; i++) {
    let div = document.createElement('div');
    div.classList.add('grid-square-style');
    grid.appendChild(div);
}

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

function generateRandomA() {
    return Number(Math.random().toFixed(1));
}


function addRandomColor(e) {
    let r = generateRandomR();
    let g = generateRandomG();
    let b = generateRandomB();
    let a = generateRandomA();

    e.target.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
}

// add event listener to each grid square 
for (i = 0; i < 256; i++) {
    gridSquares[i].addEventListener('mouseover', addRandomColor);
}