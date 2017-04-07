<<<<<<< HEAD

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
=======
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
>>>>>>> c8768ec61d18a0e35bcdeceaf334129c9de8fce6

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
  if (game.player[game.player.length - 1] !== game.currentGame[game.player.length - 1]) {
    if(game.strict){
      newGame();
    } else {
      alert('Sorry! Please try again!');
      showMoves();
    }
   } else {
      sound(x);
      var check = game.player.length === game.currentGame.length;
      if (check) {
        if(game.count == 20){
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
<<<<<<< HEAD
  game.sequence.push(game.colors[(Math.floor(Math.random()*4))]);
=======
  game.currentGame.push(game.possibilities[(Math.floor(Math.random()*4))]);
  //alert(game.currentGame.length);
>>>>>>> c8768ec61d18a0e35bcdeceaf334129c9de8fce6
  showMoves();
}

function addCount() {
<<<<<<< HEAD
  game.round++;
  $('#roundNumber').addClass('animated fadeOutDown');
  
  setTimeout(function(){
  
  $('#roundNumber').removeClass('fadeOutDown').html(game.round).addClass('fadeInDown');
=======
  game.count++;
  $('#clickNumber').addClass('animated fadeOutDown');
  
  setTimeout(function(){
    $('#clickNumber').removeClass('fadeOutDown').html(game.count).addClass('fadeInDown');
>>>>>>> c8768ec61d18a0e35bcdeceaf334129c9de8fce6
  }, 200);
  
  generateMove();
}

newGame();



};