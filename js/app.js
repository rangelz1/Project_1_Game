var game = {
  count: 0,
  possibilities: ['#green','#blue', '#red', '#yellow'],
  currentGame: [],
  player: [],
  sound:{
    blue: new Audio('sounds/sounds_01.mp3'), 
    red: new Audio('sounds/sounds_02.mp3'), 
    yellow: new Audio('sounds/sounds_03.mp3'), 
    green: new Audio('sounds/sounds_04.mp3')
  },
  strict: false,
}
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
      game.sound.green.play();
      break;
    case '#blue':
      game.sound.blue.play();
      break;
    case '#red':
      game.sound.red.play();
      break;
    case '#dark':
      game.sound.yellow.play();
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


