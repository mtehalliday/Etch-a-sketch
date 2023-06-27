const container = document.body.querySelector(".container");

//First create 16 column divs, divs with class “col”, and Id with a number from 1 – 16, and then 
//append then, create a loop which adds 16, pixel divs to each columns, so create them, then append. 
//Finally append to container div 

function createGrid(size) {
    const container = document.body.querySelector(".container");
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
    let newSize = prompt("What size grid would you like?")
    if (newSize < 2 || newSize > 99 || isNaN(newSize) ) {
        newSize = prompt("Size must be greater than 1 and less than 100")
    }
    createGrid(newSize);
    drawReady();
}
function drawReady() {
    const squares = document.querySelectorAll("div.col")

    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("mouseover", () => {
            squares[i].classList.toggle("hover");
        });
    }
}

createGrid(16);
drawReady();




const reset = document.querySelector(".reset")

reset.addEventListener("click", resetGrid)
