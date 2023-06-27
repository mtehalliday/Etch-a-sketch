const container = document.body.querySelector(".container");

//First create 16 column divs, divs with class “col”, and Id with a number from 1 – 16, and then 
//append then, create a loop which adds 16, pixel divs to each columns, so create them, then append. 
//Finally append to container div 

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for (let j = 0; j < size; j++) {
            let column = document.createElement("div");
            column.classList.add("col")
            row.appendChild(column);
        }
    }
}

function resetGrid() {
    const container = document.querySelector(".container");
    while((container).hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
    const newSize = prompt("What size grid would you like?")
    createGrid(newSize);
}


createGrid(16);

const squares = document.querySelectorAll("div.col")

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mouseover", () => {
        squares[i].classList.toggle("hover");
    });
}

const reset = document.querySelector(".reset")

reset.addEventListener("click", resetGrid)
