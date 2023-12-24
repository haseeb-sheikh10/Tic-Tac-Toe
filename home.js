let boxes = document.querySelectorAll('.box');
let disBoxes = document.querySelector(".game")
let resetButton = document.querySelector('#reset');
let resetButton2 = document.querySelector("#reset2")
let hideClass = document.querySelector(".hide")
let player1 = document.querySelector(".player1")
let player2 = document.querySelector(".player2")
let result = document.querySelector(".result")
let mainBody = document.querySelector(".mainBody")
let clickSound = new Audio("ding.mp3")

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

function playClickSound () {
    clickSound.currentTime = 0;
				clickSound.play();
}

boxes.forEach(box => {
  box.addEventListener('click', () => {
    if (box.style.backgroundImage === '') {
    playClickSound();
      if (turnO) {
        box.style.backgroundImage = "url('letter-o.png')";
        turnO = false;
      } else {
        box.style.backgroundImage = "url('letter-x.png')";
        turnO = true;
      
      }
      updatePlayers()
      checkWin();
      
    }
  });
});



let p1 = "url('letter-o.png')"
let p2 = "url('letter-x.png')"
let result1 = localStorage.getItem("input1Value")
let result2 = localStorage.getItem("input2Value")

let showWinner = (winner) => {
   hideClass.classList.add("openGameOver")
   mainBody.classList.add("blur")
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
    let first = boxes[pattern[0]].style.backgroundImage
    let second = boxes[pattern[1]].style.backgroundImage
    let third = boxes[pattern[2]].style.backgroundImage
index++;
    if (first != "" && second != "" && third != "" ) {
      
    if (first === second && second === third ) {
    
    showWinner(first);
  } else  {
      for (let box of boxes) {
        if (box.style.backgroundImage === "") {
           tie = false;
           break;
        };
      }
      
      if (tie && index === 8) {
        hideClass.classList.add("openGameOver")
        mainBody.classList.add("blur")
        result.textContent = "Draw!";
        disBoxes.classList.add("dis-boxes")
      
    }
   }
  }
}
}

const resetFunc = () => {
  hideClass.classList.remove('openGameOver')
  mainBody.classList.remove("blur")
  player1.style.visibility = "visible"
  player2.style.visibility = "visible"
  boxes.forEach(box => {
    box.style.backgroundImage = '';
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
				
