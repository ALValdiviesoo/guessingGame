let answer = document.querySelector(".answer");
let button = document.querySelector(".submit");

button.onclick = function() {
  let random = (Math.floor(Math.random() * 10)) + 1;
  if (answer.value == random) {
    alert("CORRECT! It is " + random);
  }
  else if(answer.value != random) {
    alert("WRONG! The answer is " + random);
  }
}