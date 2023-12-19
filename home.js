let popup = document.querySelector(".popup")
let input1 = document.querySelector(".input1")
let input2 = document.querySelector(".input2")
let error = document.querySelector("#error")
let okBtn = document.querySelector("#ok")

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

function checkInput1 () {
				if (input1.value === "") {
								error1.style.visibility = 'visible';
				}else if (input1.value !== ""){
								error1.style.visibility = 'hidden'
				}
}

function checkInput2 () {
				if (input2.value === "") {
								error2.style.visibility = 'visible';
				}else if (input2.value !== ""){
								error2.style.visibility = 'hidden'
				}
}

function checkInputs () {
				if (input1.value !== "" && input2.value !== "") {
								window.location.href = "index.html"
				};
}

okBtn.addEventListener("click", function(){
				checkInput1();
				checkInput2();
				checkInputs();
})

input1.addEventListener("input", function(){
				error1.style.visibility = "hidden"
				error2.style.visibility = "hidden"
});

input2.addEventListener("input", function(){
				error2.style.visibility = "hidden"
				error1.style.visibility = "hidden"
});
