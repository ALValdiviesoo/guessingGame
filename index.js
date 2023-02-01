let answer = document.querySelector(".answer");
let submit = document.querySelector(".submit");
let reset = document.querySelector(".reset");

submit.onclick = function() {
  let random = (Math.floor(Math.random() * 10)) + 1;
  if (answer.value == random) {
    document.body.style.backgroundColor = "green";
  }
  else if(answer.value != random) {
    document.body.style.backgroundColor = "red";
  }
}

reset.onclick = function() {
  document.body.style.backgroundColor = "black";
}