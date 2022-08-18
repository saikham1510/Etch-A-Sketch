let color = 'black';
let click = false;

const board = document.querySelector('.board');
const size = document.querySelector('.size');
size.addEventListener('click', newGrid);
document.getElementById("mode").textContent = "Inactive";

populateGrid(16);

function populateGrid(num) {
    for (let i = 0; i < num * num; i++) {
      createSquares();

      createGrid(num);
    }
    displayCurrentSize(num);
}

function resetGrid() {
    board.innerHTML = '';
}

function newGrid() {
    let squaresNo = prompt('Enter Pixel Size');
    let regex = /[a-z]/gi;
    
     if (squaresNo == null) {
       return;
     } else if (regex.test(squaresNo)) {
       alert("Please insert numbers only!");
     } else if (squaresNo < 2 || squaresNo > 100) {
       alert("Insert a number between 2 and 100");
       return;
     } else {
       resetGrid();

       for (let i = 0; i < squaresNo * squaresNo; i++) {
         createSquares();

         createNewGrid(squaresNo);
       }
       displayCurrentSize(squaresNo);
     }
    
}

function createSquares() {
    const square = document.createElement("div");
    board.appendChild(square);
    square.addEventListener("mouseover", colorSquare);
}

function createGrid(num) {
    board.style.display = "grid";
    board.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
}

function createNewGrid(squaresNo) {
    board.style.display = "grid";
    board.style.gridTemplateColumns = `repeat(${squaresNo}, 1fr)`;
}

function colorSquare(e) {
    if (click) {
      if (color === "random") {
        e.target.style.backgroundColor = `rgb(${Math.random() * 256}, ${
          Math.random() * 256
        }, ${Math.random() * 256})`;
      } else {
        e.target.style.backgroundColor = color;
      }
    }
}

function changeColor(choice) {
    color = choice;
}

function reset() {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => 
        div.style.backgroundColor = 'white');
}

function displayCurrentSize(arg) {
    document.getElementById('currentSize').innerHTML = `${arg} x ${arg}`;
}

document.querySelector('.board').addEventListener('click', () => {
  click = !click;
  if(click) {
    document.getElementById('mode').textContent = 'Active';
  } else {
    document.getElementById("mode").textContent = "Inactive";
  }
})