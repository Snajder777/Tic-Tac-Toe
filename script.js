

const statusDiv = document.getElementById('status');

let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;

const winningConditions = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
];

function handleCellClick(e) {
  const index = e.target.dataset.index;
  if (board[index] !== '' || !gameActive) return;

  board[index] = currentPlayer;
  e.target.innerText = currentPlayer;

  if (checkWin()) {
    statusDiv.innerText = `Spieler ${currentPlayer} gewinnt!`;
    gameActive = false;
    return;