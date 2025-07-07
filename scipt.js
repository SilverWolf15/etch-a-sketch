let size = document.querySelector(".set-size");
let gridSize = 16;
let gridArray = [];
let container = document.querySelector(".container");

function getGridSize() {
    getSize = parseInt(prompt("Enter the number of squares per side"));
    gridSize = isNaN(getSize) ? 16 : (getSize>100 || getSize<1) ? 16 : getSize;
    generateGrid();
}

function randomColor() {
    red = Math.floor(Math.random() * 255);
    green = Math.floor(Math.random() * 255);
    blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`;
}

function generateGrid() {
    gridArray = [];
    for(let i=0; i<(gridSize*gridSize); i++) {
        gridArray[i] = document.createElement("div");
        gridArray[i].style.cssText = `display: flex; flex: 1 0 calc(100% / ${gridSize});`;
    }
    container.replaceChildren(...gridArray);

    gridArray.forEach(element => {
        element.addEventListener("mouseenter", () => {
            element.style["background-color"] = randomColor();
        })
    });
}

generateGrid();
size.addEventListener("click", getGridSize);