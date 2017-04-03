var gameCount = 0,
var gamePossibilities: ['#green','#blue', '#red', '#yellow'], 
var gameCurrentGame: [],
var gamePlayer: [],
var gameStrict: false,
var gameSound:{
    blue: new Audio(''), 
    red: new Audio(''), 
    yellow: new Audio(''), 
    green: new Audio('')
  },

function clearGame() {
 
}

function newGame() {
  
}

function strict() {
}

function showMoves() {
}

function sound(name) {
  switch(name) {
    case'#green':
      gameSound.green.play();
      break;
    case '#blue':
      gameSound.blue.play();
      break;
    case '#red':
      gameSound.red.play();
      break;
    case '#yellow':
      gameSound.yellow.play();
      break;
  };
}

function playGame(field) {

}

function clearPlayer() {
  game.player = [];
}

function addToPlayer(id) {
 
} 

function playerTurn(x) {
 
} 

function nextLevel() {
  addCount();
}

function generateMove(){
 
}

function addCount() {
 
}

newGame();


