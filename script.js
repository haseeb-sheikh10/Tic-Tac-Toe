let boxes = document.querySelectorAll('.box');
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
    if (box.innerHTML === '') {
      if (turnO) {
        box.innerHTML = 'O';
        turnO = false;
      } else {
        box.innerHTML = 'X';
        turnO = true;
      
      }
      checkWin();
    }
  });
});

let disBoxes = () => {
  for (let box of boxes) {
     box.disabled = true;
    
  }
}

let p1 = "O"
let p2 = "X"

let showWinner = (winner) => {
   hideClass.classList.remove("hide")
   hideClass.classList.add("openGameOver")
   console.log(hideClass.classList)
   if (winner === p1) {
   				result.textContent = player1.textContent + (" = O")
   }else {
   				result.textContent = player2.textContent + (" = X")
   }
   
  disBoxes();
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
        gameOver.classList.remove('hide')
        gameOver.classList.add("openGameOver")
        result.textContent = "Draw!";
        disBoxes();
      
    }
   }
  }
}
}

resetButton.addEventListener('click', () => {
  gameOver.classList.add('hide')
  boxes.forEach(box => {
    box.innerHTML = '';
    box.disabled = false;
    turnO = true;
  });
});

resetButton2.addEventListener('click', () => {
  gameOver.classList.add('hide')
  boxes.forEach(box => {
    box.innerHTML = '';
    box.disabled = false;
    turnO = true;
  });
});

  function updatePlayers() {
    player1.textContent = localStorage.getItem("input1Value");
    player2.textContent = localStorage.getItem("input2Value");
   
  }

  window.addEventListener("DOMContentLoaded", updatePlayers);

