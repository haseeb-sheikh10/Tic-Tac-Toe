let boxes = document.querySelectorAll('.box');
let disBoxes = document.querySelector(".game")
let resetButton = document.querySelector('#reset');
let resetButton2 = document.querySelector("#reset2")
let hideClass = document.querySelector(".hide")
let player1 = document.querySelector(".player1")
let player2 = document.querySelector(".player2")
let result = document.querySelector(".result")

let turnO = true;
let winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
boxes.forEach(box => {
  box.addEventListener('click', () => {
    if (box.textContent === '') {
      if (turnO) {
        box.textContent = 'O';
        turnO = false;
      } else {
        box.textContent = 'X';
        turnO = true;
      
      }
      updatePlayers()
      checkWin();
      
    }
  });
});



let p1 = "O"
let p2 = "X"
let result1 = localStorage.getItem("input1Value")
let result2 = localStorage.getItem("input2Value")

let showWinner = (winner) => {
   hideClass.classList.add("openGameOver")
   if (winner === p1) {
   				result.textContent = result1 + (" wins!")
   }else {
   				result.textContent = result2 + (" wins!")
   }
   player1.style.visibility = "hidden"
   player2.style.visibility = "hidden"
  disBoxes.classList.add("dis-boxes")
}

let checkWin = () => {

  let index = 0
  let tie = true;
  for (let pattern of winPatterns) {
    let first = boxes[pattern[0]].textContent
    let second = boxes[pattern[1]].textContent
    let third = boxes[pattern[2]].textContent 
index++;
    if (first != "" && second != "" && third != "" ) {
      
    if (first === second && second === third ) {
    
    showWinner(first);
  } else  {
      for (let box of boxes) {
        if (box.textContent === "") {
           tie = false;
           break;
        };
      }
      
      if (tie && index === 8) {
        hideClass.classList.add("openGameOver")
        result.textContent = "Draw!";
        disBoxes.classList.add("dis-boxes")
      
    }
   }
  }
}
}

const resetFunc = () => {
  hideClass.classList.remove('openGameOver')
  player1.style.visibility = "visible"
  player2.style.visibility = "visible"
  boxes.forEach(box => {
    box.textContent = '';
    disBoxes.classList.remove("dis-boxes")
  });
  updatePlayers();
  };

resetButton.addEventListener('click', resetFunc);

resetButton2.addEventListener('click', resetFunc);

  function updatePlayers() {
  rightTurn()
    player1.textContent = localStorage.getItem("input1Value") + "'s turn";
    player2.textContent = localStorage.getItem("input2Value") + "'s turn";
  }

  window.addEventListener("DOMContentLoaded", updatePlayers);

function rightTurn() {
				if (turnO === true) {
								player2.classList.add("rightTurn")
								player1.classList.remove("rightTurn")
				}else if (turnO !== true){
				player1.classList.add("rightTurn")
				player2.classList.remove("rightTurn")
}
}
				
