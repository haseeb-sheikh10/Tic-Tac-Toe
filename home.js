let popup = document.querySelector(".popup")
let input1 = document.querySelector(".input1")
let input2 = document.querySelector(".input2")

function openPopup () {
				popup.classList.add("open-popup");
}

function closePopup () {
				popup.classList.remove("open-popup");
}


  function saveValue() {
    localStorage.setItem("input1Value", input1.value);
    localStorage.setItem("input2Value", input2.value);
  }

  input1.addEventListener("input", saveValue);
  input2.addEventListener("input", saveValue);
