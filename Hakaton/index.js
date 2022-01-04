
const deck = document.querySelector('.deck'); // Creates list that holds cards.

let moves = 0;
let time = 0;
let clockId;
let timerOff = true; // sets timer to start in the off position.

let activeDeck = []; // Holds selected cards w/max # of 2.
let matchedDeck = []; // Holds matched cards.


// allows board to reset on click from Reset icon.
// allows "Play Again?" to reset board & pop-up to be removed on click.
$('.popRestart').click(resetGame);
$('.restart').click(resetDeck);

$('.card').click(selectCard); // allows cards to be "flipped" on click.
$('.popReturn').click(returnToGame); // allows "Return?" to remove pop-up and return to won game.

// allows timer to start when card is clicked.
$('.card').click(selectCard, event => {
  if (timerOff) {
    startDaClock();
    timerOff = false;
  }
});



/*
 * Function creates the "flipping" capability that shows user card selected.
 */
function toggleCard(clickCard) {
    clickCard.classList.toggle('open');
    clickCard.classList.toggle('show');
}


/*
 * Function that makes sure only two cards are selected at once.
 */
function validClick (clickCard) {
  return (
    clickCard.classList.contains('card') &&
    !clickCard.classList.contains('match') &&
    activeDeck.length < 2 &&
    !activeDeck.includes(clickCard)
  );
}


/*
 * Function checks "flipped"  for a match; if matched, cards get added to activeDeck array;
 *   + also, sets timeOut cardsfunction for when cards are OK to be "flipped" back if no match found.
 *   + also, increments moves and displays the moves on game.
 */
function matching () {
 
    if (activeDeck.length === 2 &&
      activeDeck[0].firstElementChild.className ===
      activeDeck[1].firstElementChild.className
     
  ) {
      activeDeck[0].classList.toggle('match');
      activeDeck[1].classList.toggle('match');
      matchedDeck.push(this);
      activeDeck = [];
      moves++;
      setTimeout( () => {
      
        var fadeTarget =  document.getElementsByClassName('container')[0];
        var fadeEffect = setInterval(function () {
            if (!fadeTarget.style.opacity) {
                fadeTarget.style.opacity = 1;
            }
            if (fadeTarget.style.opacity > 0) {
                fadeTarget.style.opacity -= 0.05;
            } else {
                clearInterval(fadeEffect);
            }
        }, 50);
    
      }, 1000);


    }
  else if (activeDeck.length === 2 &&
      activeDeck[0].firstElementChild.className !==
      activeDeck[1].firstElementChild.className
  ) {
    moves++;
   
      setTimeout( () => {
        toggleCard(activeDeck[0]);
        toggleCard(activeDeck[1]);
        activeDeck = [];
      }, 1000);
  }

  const showMove = document.querySelector('.moves');
  showMove.innerHTML = moves;

  const showPopMove = document.querySelector('.movesPop')
  showPopMove.innerHTML = moves
}


/*
 * Funtion adds clicked & matched cards to activeDeck array.
 */
function decksCard (clickCard) {
  activeDeck.push(clickCard);
}


/*
 * Selects card, "flips" card over, places card in activeDeck array, checks if cards match,
 * Amy's Note: 'pretty much does "everything"'.
 */
function selectCard () {
    const clickCard = event.target;

    if (validClick(clickCard)) {
        toggleCard(this); // "flips" cards over when clicked
        decksCard(this); // adds card to activeDeck array
        matching(this); // checks cards for matches, "flips" cards over if no match
        matchedCards(this); // checks how many matched cards are in array to finish game
        starScore(this); // removes stars based on move count

    }
}


/*
 * Function that sets up timer.
 */
function startDaClock () {
  clockId = setInterval(() => {
      let minutes = Math.floor(time / 60);
      let seconds = (time % 60);
      time++;

      if (seconds < 10) {
        clock.innerHTML = `${minutes}:0${seconds}`;
        popClock.innerHTML = `${minutes}:0${seconds}`;
      } else {
        clock.innerHTML = `${minutes}:${seconds}`;
        popClock.innerHTML = `${minutes}:${seconds}`;
      }
  }, 1000);

 const clock = document.querySelector('.clock');

 const popClock = document.querySelector('.popClock');
}


// stops timer
function stopDaClock () {
   clearInterval(clockId);

   return stopDaClock;
}


/*
 * Function to trigger the shuffling of cards that have been added to cardsToShuffle array.
 */
 function shuffleDeck () {
   const cardsToShuffle = Array.from(document.querySelectorAll('.deck li'));

   const shuffledCards = shuffle(cardsToShuffle);

   for (const card of shuffledCards) {
     deck.appendChild(card);
   }
 }
 shuffleDeck();


/*
 * Function shuffles deck using Fisher-Yates Modern Shuffle Algorithm.
 * Code was given as starter code:
 * Shuffle function from http://stackoverflow.com/a/2450976.
 */
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;



    return array;
}


/*
 * Following three functions resets game by:
 *      - clearing activeDeck & matchedDeck arrays,
 *      - shuffling and "flipping over" cards,
 *      - resetting move counter, stars, and timer, and
 *      - hiding winning pop-up, if applicable.
 * Amy's Note: 'starts game over again w/o refreshing browser'.
 */
function resetDeck () {
    shuffleDeck (this);

    $('.card').removeClass('show open match');
    $('#winPop').addClass('hidden');

    $('.starOne').addClass('full');
    $('.starTwo').addClass('full');
    $('.starThree').addClass('full');

    $('.moves').html('0');
    $('.movesPop').html('0');
    moves = 0;

    $('.clock').html('0:00');
    $('.popClock').html('0:00');
    time = 0;

    activeDeck = [];
    matchedDeck = [];

    return resetDeck;

}
function resetGame () {
    shuffleDeck (this);
    resetDeck(this);

    startDaClock();

    return resetGame;

}


/*
 * Function toggles winning pop-up message
 */
function togglePop () {
  const modal = document.querySelector('#winPop');

  modal.classList.toggle('hidden');


  return togglePop;
}

// Function toggles pop-up modal to return to game without resetting
function returnToGame () {
  togglePop();

  return returnToGame;
}

/*
 * Function checks for number of matched cards in matchedDeck array;
 *
 */
 function matchedCards () {
   if (matchedDeck.length === 8) {

     stopDaClock();
     setTimeout (() => {
       togglePop(this);
     }, 10);
   }
   else if (matchedDeck.length === 6) {
   }
   else if (matchedDeck.length === 4) {
   }

   return matchedCards;
 }


 /*
  * Removes star highlight from overall star counts
  */
 function starScore () {
   if (moves === 20) {
     $('.starOne').removeClass('full');
     console.log('You lost a star!');
   }
   else if (moves === 30) {
     $('.starTwo').removeClass('full');
     console.log('You lost another star!');
   }

   return starScore;
 }



      /* FANCY FX */
/*
* Glitter effect
* From: https://codepen.io/kucsatax/pen/vyWevX
*/
$(function() {
  var body = $('#starshine'),
  template = $('.template.shine'),
  stars =  1000,
  sparkle = 30;

  var size = 'small';
  var createStar = function() {
    template.clone().removeAttr('id').css({
    top: (Math.random() * 100) + '%',
    left: (Math.random() * 100) + '%',
    webkitAnimationDelay: (Math.random() * sparkle) + 's',
    mozAnimationDelay: (Math.random() * sparkle) + 's'
    }).addClass(size).appendTo(body);
  };

  for(var i = 0; i < stars; i++) {
    if(i % 2 === 0) {
      size = 'small';
    } else if (i % 3 === 0) {
      size = 'medium';
    } else {
      size = 'large';
    }

    createStar();
  }
});
