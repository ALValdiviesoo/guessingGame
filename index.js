let answer = document.querySelector(".answer");
let submit = document.querySelector(".submit");
let reset = document.querySelector(".reset");
const correct = document.getElementById("correct");
const wrong = document.getElementById("wrong");

submit.onclick = function() {
  let random = (Math.floor(Math.random() * 10)) + 1;

  if (answer.value == random) {
    document.body.style.backgroundColor = "green";
    correct.play();
  }
  else if(answer.value != random) {
    document.body.style.backgroundColor = "red";
    wrong.play();
  }
}

reset.onclick = function() {
  document.body.style.backgroundColor = "black";
}