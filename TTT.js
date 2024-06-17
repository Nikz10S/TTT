console.log("Welcome to Tic Tac Toe!")
let turn = "X"
let playerX = document.querySelector(".board .xwala");
let playerO = document.querySelector(".board .owala");
const boxElements = document.querySelectorAll(".grid .box");

const changeTurn = () => {
  if(turn === "X"){
    playerO.classList.add("active");
    playerX.classList.remove("active");
  }
  if(turn === "O"){
    playerX.classList.add("active");
    playerO.classList.remove("active");
  }
  return turn === "X" ? "O" : "X"
}

const autoReset = () => {
  if(checkWin = true){
  }
}

const checkWin = () => {
  let boxtext = document.getElementsByClassName('boxtext');
  let win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  win.forEach(e => {
      if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "")) {
        document.querySelector('.winner').innerText = boxtext[e[0]].innerText + " has Won!"
      }
  })

}

let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach(element => {
  let boxtext = element.querySelector('.boxtext');
  element.addEventListener('click', () => {
    if(boxtext.innerText === ''){
      boxtext.innerText = turn;
      turn = changeTurn();
      checkWin();
      isDraw();
    }
  })
})

reset.addEventListener('click', () => {
  let boxtexts = document.querySelectorAll('.boxtext');
  Array.from(boxtexts).forEach(element => {
    element.innerText = ""
  });
  turn = "X";
  document.querySelector('.winner').innerText = "Who's gonna win?"
})