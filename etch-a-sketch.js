const gridContainer = document.querySelector("#gridContainer");
for (i = 1; i < 20 * 20; i++){
    const gridSquare = document.createElement("div");
    gridSquare.addEventListener("mouseover", () =>{
        gridSquare.style.backgroundColor = "black";
    })
    gridContainer.appendChild(gridSquare);
}
