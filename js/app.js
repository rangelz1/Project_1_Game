$(document).ready(function() {
 console.log($)
var sequence = [];
var player = [];
 var sounds = [
    "sounds/1.mp3", 
    "sounds/2.mp3", 
    "sounds/3.mp3", 
    "sounds/4.mp3"
  ];
 var red = "red";
var blue = "blue";
var yellow = "yellow";
var green = "green";
var colors = [red, blue, yellow, green];
var color;
var redSound = new Audio( 'sounds/1.mp3');
var blueSound = new Audio( 'sounds/2.mp3');
var yellowSound = new Audio( 'sounds/3.mp3');
var greenSound = new Audio( 'sounds/4.mp3');
var errorSound = new Audio("http://www.freesfx.co.uk/rx2/mp3s/10/12671_1442589611.mp3");
var sound;

function clearGame() {
  game.currentGame = [];
  game.count = 0;
  addCount();
}

function newGame() {
  clearGame();
}

function strict() {
  if (game.strict == false) {
    game.strict = true;
    $('#strict').html('Is currently On').removeClass('btn-primary').addClass('btn-danger');
  } else {
    game.strict = false;
    $('#strict').html('Is currently Off').removeClass('btn-danger').addClass('btn-primary');
  }
  
  newGame();
}

function showMoves() {
  var i = 0;
  var moves = setInterval(function(){
    playGame(game.currentGame[i]);
    i++;
    if (i >= game.currentGame.length) {
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
  $(field).addClass('hover');
  sound(field);
  setTimeout(function(){
      $(field).removeClass('hover');
  }, 300);
}

function clearPlayer() {
  game.player = [];
}

function addToPlayer(id) {
  var field = "#"+id
  console.log(field);
  game.player.push(field);
  playerTurn(field);
} 

function playerTurn(x) {
  if (game.player[game.player.length - 1] !== game.currentGame[game.player.length - 1]) {
    if(game.strict){
      alert('Try again! ...From scratch!');
      newGame();
    } else {
      alert('Wrong move! Try again!');
      showMoves();
    }
   } else {
      console.log('Good Move!');
      sound(x);
      var check = game.player.length === game.currentGame.length;
      if (check) {
        if(game.count == 20){
          alert('You won! Congrats.');
        } else {
          alert('Next round!');
          nextLevel();
        }
      }
    }
} 

function nextLevel() {
  addCount();
}

function generateMove(){
  game.currentGame.push(game.possibilities[(Math.floor(Math.random()*4))]);
  //alert(game.currentGame.length);
  showMoves();
}

function addCount() {
  game.count++;
  $('#clickNumber').addClass('animated fadeOutDown');
  
  setTimeout(function(){
    $('#clickNumber').removeClass('fadeOutDown').html(game.count).addClass('fadeInDown');
  }, 200);
  
  generateMove();
}

newGame();



};