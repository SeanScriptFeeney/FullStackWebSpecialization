var colors, guessInput;
var gameStatus = false;
var timesTried = 0;

function do_game(){

  colors = ["red", "orange", "yellow", "cyan", "blue", "gold", "gray", "green", "white"];

  colors.sort();

  var target_index = Math.floor(Math.random() * colors.length);

  var target = colors[target_index];

  alert(target);

  do{
    initialize(target);
  }
  while(!gameStatus);

  document.body.style.background = guessInput;
  alert("Congratulations!! You have guessed the color! \n\n It took you " + timesTried + " guesses to finish the game! \n\n You can see the color in the background.");
}

function initialize(target){

  timesTried++;
  guessInput = prompt("I am thinking of one of these colors: \n\n" + colors + "\n\n" + "What color am I thinking of? ");

  checkIfColorExists(guessInput);
  checkAlphabeticallyLevel(guessInput, target);
}

function checkIfColorExists(guessInput){

  for(color in colors){

    if(guessInput == colors[color]){
      gameStatus = true;
      return;
    }
  }
  alert("Sorry, I do not recognize your color. \n\n Please try again.");
  gameStatus = false;
  initialize();
  return;
}

function checkAlphabeticallyLevel(guessInput, target){

  if (guessInput > target) {
          alert("Sorry, Your guess is not correct! \n\nHint: Your color is alphabetically higher than mine. \n\nPlease try again.");
          gameStatus = false;
          return;
    }
  if (guessInput < target){
          alert("Sorry, Your guess is not correct! \n\nHint: Your color is alphabetically lower than mine. \n\nPlease try again.");
          gameStatus = false;
          return;
    }

  gameStatus = true;
  return;
}
