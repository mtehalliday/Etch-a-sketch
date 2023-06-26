const container = document.querySelector(#container);

for (let i = 0; i < 16; i++) {
    let div_col = createElement("div");
    div_col.classList.add(`col_{i}`);
    for (let j = 0; j < 16; j++) {
        let row = createElement("div");
        div_col.appendChild(row);
    }
}


const gridSquare = document.createElement("div");
gridSquare.classList.add("square");