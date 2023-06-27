const container = document.body.querySelector(".container");

//First create 16 column divs, divs with class “col”, and Id with a number from 1 – 16, and then 
//append then, create a loop which adds 16, pixel divs to each columns, so create them, then append. 
//Finally append to container div 

function createGrid() {
    for (let i = 0; i < 16; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for (let j = 0; j < 16; j++) {
            let column = document.createElement("div");
            column.classList.add("col")
            row.appendChild(column);
        }
    }
}

createGrid();