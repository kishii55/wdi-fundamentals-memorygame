var cardOne = 'queen';
var cardTwo = 'queen';
var cardThree = 'king';
var cardFour = 'king';

/*
if(cardTwo===cardFour) {
  alert("Sorry, try again.");
} else if(cardTwo===cardOne) {
  alert("You found a match!");
} else if(cardThree===cardFour) {
  alert("You found a match!");
} else {
  alert("Sorry, try again.");
}
*/

document.getElementById('game-board');

var createBoard=function(){
  for(i=0; i<cards.length; i++) {
  var newElement=document.createElement('card');
  newElement.classNanme='card';
  card.appendChild('game-board');
  }
}

console.log(createBoard);
