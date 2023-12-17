let boxes = document.querySelectorAll(".box");
let contentBoxes = document.querySelectorAll(".box-content");
let resetButton = document.querySelector("#reset");
let resetButton2 = document.querySelector("#reset2");
let hideClass = document.querySelector(".hide");
let player1 = document.querySelector(".player1");
let player2 = document.querySelector(".player2");
let result = document.querySelector(".result");

let turnO = true;
let winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    if (contentBoxes[index].textContent === "") {
      if (turnO) {
        contentBoxes[index].textContent = "O";
        turnO = false;
      } else {
        contentBoxes[index].textContent = "X";
        turnO = true;
      }
      updatePlayers();
      checkWin();
    }
  });
});

let disBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

let p1 = "O";
let p2 = "X";

let showWinner = (winner) => {
  hideClass.classList.add("openGameOver");
  if (winner === p1) {
    result.textContent = player1.textContent + " wins!";
  } else {
    result.textContent = player2.textContent + " wins!";
  }

  disBoxes();
};

let checkWin = () => {
  let index = 0;
  let tie = true;
  for (let pattern of winPatterns) {
    let first = contentBoxes[pattern[0]].textContent;
    let second = contentBoxes[pattern[1]].textContent;
    let third = contentBoxes[pattern[2]].textContent;
    index++;
    if (first != "" && second != "" && third != "") {
      if (first === second && second === third) {
        showWinner(first);
      } else {
        for (let box of contentBoxes) {
          if (box.textContent === "") {
            tie = false;
            break;
          }
        }

        if (tie && index === 8) {
          hideClass.classList.add("openGameOver");
          result.textContent = "Draw!";
          disBoxes();
        }
      }
    }
  }
};

const resetFunc = () => {
  hideClass.classList.remove("openGameOver");
  contentBoxes.forEach((box) => {
    box.textContent = "";
    box.disabled = false;
  });
  updatePlayers();
};

resetButton.addEventListener("click", resetFunc);

resetButton2.addEventListener("click", resetFunc);

function updatePlayers() {
  rightTurn();
  player1.textContent = localStorage.getItem("input1Value") + "'s turn";
  player2.textContent = localStorage.getItem("input2Value") + "'s turn";
}

window.addEventListener("DOMContentLoaded", updatePlayers);

function rightTurn() {
  if (turnO === true) {
    player2.classList.add("rightTurn");
    player1.classList.remove("rightTurn");
  } else if (turnO !== true) {
    player1.classList.add("rightTurn");
    player2.classList.remove("rightTurn");
  }
}
