document.addEventListener("DOMContentLoaded", getPasswords);

let numbers = "23456789".split("");
let lowers = "abdefghjmnqrstuvxzwy".split("");
let uppers = "ABDEFGHJMNRSTUVXZWY".split("");

function genRandomIndex(limits) {
  return Math.floor(Math.random() * limits);
}
function genNumber() {
  let random = genRandomIndex(numbers.length);
  return numbers[random];
}
function genLowercase() {
  let random = genRandomIndex(lowers.length);
  return lowers[random];
}
function genUppercase() {
  let random = genRandomIndex(uppers.length);
  return uppers[random];
}

let genFunctions = [genNumber, genLowercase, genUppercase];
let MAXPASS = 3;
let PW_LENGTH = 10;
let information = document.getElementById("information");
let passContainer = document.getElementById("pass-container");

function genPassword(len) {
  let password = "";

  for (let i = 0; i < len; i++) password += genFunctions[genRandomIndex(3)]();

  return password;
}

function getPasswords() {
  passContainer.innerHTML = "";
  information.innerHTML = "Clique em alguma senha para copiar!";

  for (let w = 0; w < MAXPASS; w++) {
    passContainer.innerHTML +=
      `<article class="pass" key="${w + 1}" onclick="copyToClickBoard()" >` +
      genPassword(PW_LENGTH) +
      "</article>";
  }
}

function copyToClickBoard() {
  event.target.classList.add("bg-yellow");
  let passwordGenarated = event.target.innerHTML;
  navigator.clipboard.writeText(passwordGenarated);
}
