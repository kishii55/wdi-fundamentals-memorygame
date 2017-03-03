var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var gameBoard=document.getElementById('game-board');
function createBoard() {
  for (i=0; i<cards.length; i++) {
  var cardElement=document.createElement('div');
  cardElement.className = 'card';
  cardElement.setAttribute('data-card', cards[i]);
  cardElement.addEventListener('click', isTwoCards);
  gameBoard.appendChild(cardElement);
  }
}

function isTwoCards() {
  cardsInPlay.push(this.getAttribute('data-card'));
    console.log(this.getAttribute('data-card'));
  if (this.getAttribute('data-card')==='queen') {
    this.innerHTML = '<img src="https://cdn.pixabay.com/photo/2013/07/13/10/43/cards-157645_960_720.png" />';
  } else {
    this.innerHTML = '<img src="https://cdn.pixabay.com/photo/2013/07/13/10/43/cards-157650_960_720.png" />';
  }
    if (cardsInPlay.length === 2) {
      isMatch(cardsInPlay);
      cardsInPlay=[];
    }
  }

  function isMatch(cardsInPlay) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!")
    } else {
      alert("Sorry, try again.");
    }
  }
  cardsInPlay = [];
  createBoard();
