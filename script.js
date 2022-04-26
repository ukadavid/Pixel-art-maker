
function changeColor() {
    const color = document.getElementById("color_picker").value;
    this.style.background = color;
} /*
This changes the current background color to the color picked from colorPicker
*/


function makeGrid() {
    const gridHeight = document.getElementById("height").value;
    const gridWidth = document.getElementById("width").value;
    const pixelArtCanvas = document.getElementById("pixel_art_canvas"); 
    pixelArtCanvas.innerText=""; // empty table   
    /*
This will create a table with width and height from input. Each cell contains 
*/
    for (let h=0; h<gridHeight; ++h) {
        const row = pixelArtCanvas.insertRow(-1); // This will insert a new row at the last position
        for (let w=0; w<gridWidth; ++w) {
            const cell = row.insertCell(-1); //This will insert a new cell at the last position 
            cell.onclick = changeColor; //This allows the colour to be inputed when the table is clicked
    }
}
    event.preventDefault();
}
