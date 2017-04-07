
var game = {
  round: 0,
  colors: ['#green','#blue', '#red', '#yellow'],
  sequence: [],
  player: [],
  sound:{
    blue: new Audio('sounds/1.mp3'), 
    red: new Audio('sounds/2.mp3'), 
    yellow: new Audio('sounds/3.mp3'), 
    green: new Audio('sounds/4.mp3')
  },
  
}

function clearGame() {
  game.sequence = [];
  game.round = 0;
  addCount();
}

function newGame() {
  clearGame();
}


function showMoves() {
  var i = 0;
  var moves = setInterval(function(){
    playGame(game.sequence[i]);
    i++;
    if (i >= game.sequence.length) {
      clearInterval(moves);
    }
  }, 600)
  
  clearPlayer();
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
    case '#yellow':
      game.sound.yellow.play();
      break;
  };
}

function playGame(field) {
  $(field).addClass('lit');
  sound(field);
  setTimeout(function(){
      $(field).removeClass('lit');
  }, 300);
}

function clearPlayer() {
  game.player = [];
}

function gameClick(id) {
  var field = "#"+id
  game.player.push(field);
  playerTurn(field);
} 

function playerTurn(x) {
  if (game.player[game.player.length - 1] !== game.sequence[game.player.length - 1]) {
    if(game.strict){
      newGame();
    } else {
      alert('Sorry! Please try again!');
      showMoves();
    }
   } else {
      sound(x);
      var check = game.player.length === game.sequence.length;
      if (check) {
        if(game.round == 20){
          alert('You won! Congrats.');
        } else {
          nextLevel();
        }
      }
    }
} 

function nextLevel() {
  addCount();
}

function generateMove(){
  game.sequence.push(game.colors[(Math.floor(Math.random()*4))]);
  showMoves();
}

function addCount() {
  game.round++;
  $('#roundNumber').addClass('animated fadeOutDown');
  
  setTimeout(function(){
  
  $('#roundNumber').removeClass('fadeOutDown').html(game.round).addClass('fadeInDown');
  }, 200);
  
  generateMove();
}

newGame();



