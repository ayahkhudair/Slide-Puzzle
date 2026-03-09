var rows = 3;
var columns = 3;
var currTile, otherTile;
var turns = 0;
var imgOrder = ["1", "4", "2", "3", "5", "6", "7", "8", "9"]; 

window.onload = function() {
    buildBoard();
}

function buildBoard() {
    let board = document.getElementById("board");
    board.innerHTML = ""; 
    let orderCopy = [...imgOrder]; 

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            let num = orderCopy.shift();
            tile.src = num + ".jpg";
            tile.classList.add("tile");

            if (num === "1") {
                tile.style.opacity = "0"; 
            }

            tile.addEventListener("dragstart", dragStart); 
            tile.addEventListener("dragover", dragOver);   
            tile.addEventListener("dragenter", dragEnter); 
            tile.addEventListener("drop", dragDrop);       
            tile.addEventListener("dragend", dragEnd);     
            board.append(tile);
        }
    }
}

function startGame() {
    turns = 0;
    document.getElementById("turns").innerText = turns;
    document.getElementById("overlay").style.display = "none";
    buildBoard();
}

function dragStart() { currTile = this; }
function dragOver(e) { e.preventDefault(); }
function dragEnter(e) { e.preventDefault(); }
function dragDrop() { otherTile = this; }

function dragEnd() {
    if (!otherTile || otherTile.style.opacity !== "0") return;

    let currCoords = currTile.id.split("-"); 
    let r = parseInt(currCoords[0]), c = parseInt(currCoords[1]);
    let otherCoords = otherTile.id.split("-");
    let r2 = parseInt(otherCoords[0]), c2 = parseInt(otherCoords[1]);

    let isAdjacent = (r == r2 && Math.abs(c - c2) == 1) || (c == c2 && Math.abs(r - r2) == 1);

    if (isAdjacent) {
        let currImg = currTile.src;
        currTile.src = otherTile.src;
        otherTile.src = currImg;

        currTile.style.opacity = "0";
        otherTile.style.opacity = "1";

        turns += 1;
        document.getElementById("turns").innerText = turns;
        checkWin();
    }
}

function checkWin() {
    let tiles = document.querySelectorAll(".tile");
    let currentPattern = "";
    
    tiles.forEach(t => {
        let fileName = t.src.split('/').pop().replace('.jpg', '');
        currentPattern += fileName;
    });

    if (currentPattern === "123456789") {
        // Latency logic: fill in the blank image first
        tiles.forEach(t => {
            if (t.style.opacity === "0") t.style.opacity = "1";
        });

        // Delay winning screen so the user sees the completed puzzle
        setTimeout(() => {
            document.getElementById("modal-text").innerText = "Winner! Total Turns: " + turns;
            document.getElementById("modal-btn").innerText = "Restart Game";
            document.getElementById("overlay").style.display = "flex";
        }, 800); 
    }
}