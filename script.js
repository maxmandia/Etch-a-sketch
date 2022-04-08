function changeSize(input) {
  if (input <= 100) {
    populateBoard(input);
  } else {
    console.log("buggin");
  }
}

function populateBoard(size) {
  let board = document.querySelector(".board");
  let btn = document.querySelector(".clear-btn");
  let squares = board.querySelectorAll(".div");
  squares.forEach((div) => div.remove());

  board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeend", square);

    square.addEventListener("mouseover", function () {
      square.style.backgroundColor = "black";
      btn.addEventListener("click", function () {
        square.style.backgroundColor = "white";
      });
    });
  }
}

populateBoard(16);
