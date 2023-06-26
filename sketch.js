const container = document.body.querySelector("#container");

//First create 16 column divs, divs with class “col”, and Id with a number from 1 – 16, and then 
//append then, create a loop which adds 16, pixel divs to each columns, so create them, then append. 
//Finally append to container div 


for (let i = 0; i < 16; i++) {
    let div_col = document.createElement("div");
    div_col.classList.add(`col_{i}`);
    for (let j = 0; j < 16; j++) {
        let row = document.createElement("div");
        div_col.appendChild(row);
    }
}


const gridSquare = document.createElement("div");
gridSquare.classList.add("square");