var letters = ["a", "b", "c"];

var guessedLetters = [];

var letterToGuess = null;

var guessesLeft = 9;

var wins = 0;
var losses = 0;

var quotes = [ "'The degree of failure is in direct proportion to the effort expended and to the need for success.' - Sodd's Other Law", "'No job is too small to botch.' - Hylton's Rule", "'Experiments should be reproducible… they should all fail in the same way.' - Law of Continuity", "'If we don’t succeed, we run the risk of failure.' -Dan Quayle, U.S. Vice President", "'Trying is the first step toward failure.' - Homer Simpson", "'I have not failed; I've just found 10,000 ways that don't work' - Thomas Edison", "'The major difference between a thing that might go wrong and a thing that cannot possibly go wrong is that when a thing that cannot possibly go wrong goes wrong it usually turns out to be impossible to get at and repair.' - Douglas Adams", "'Whom the gods wish to destroy they first call promising.' - Cyril Connolly", "'Even if you're on the right track, you'll get run over if you just sit there.' - Will Rogers", "'If at first you don't succeed, try try again… then quit; there's no use being a damn fool about it.' - W.C. Fields", "'Informed decision-making comes from a long tradition of guessing and then blaming others for inadequate results.' - Scott Adams", "'If at first you don't succeed, failure may be your style.' - Quentin Crisp", "'I didn't fail the test, I just found 100 ways to do it wrong.' - Benjamin Franklin", "'The theory seems to be that as long as a man is a failure he is one of God's children, but that as soon as he succeeds he is taken over by the Devil.' - H.L. Mencken", "'The most dangerous strategy is to jump a chasm in two leaps.' - Benjamin Disraeli", "'Murphy’s Law only fails when you try to demonstrate it.' - Another Axiom to Murphy's Law", "'If the probability of success is not almost one, then it is damn near zero.' - The Fourth Law of Thermodynamics", "'Mistakes are often the stepping stones to utter failure.' - Proverb"]

var updateGuessesLeft = function() {
  document.querySelector("#guesses-left").innerHTML = guessesLeft;
};

var updateLetterToGuess = function() {
  letterToGuess = letters[Math.floor(Math.random() * letters.length)];
};

var updateGuessesSoFar = function() {
  document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(", ");
};

var reset = function() {
  guessesLeft = 9;
  guessedLetters = [];
  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
};

updateLetterToGuess();
updateGuessesLeft();

document.onkeydown = function(event) {
  guessesLeft--;

  var letter = String.fromCharCode(event.which).toLowerCase();

  guessedLetters.push(letter);

  updateGuessesLeft();
  updateGuessesSoFar();


  if (letter === letterToGuess) {


    wins++;
    document.querySelector("#wins").innerHTML = (wins + " times. Statistically that's actually lower than a monkey with a typewriter would have achieved.");

    reset();
  }

  if (guessesLeft === 0) {

    failQuote = quotes[Math.floor(Math.random() * quotes.length)]
    losses++;
    document.querySelector("#losses").innerHTML = (losses + " times. "+ failQuote);

    reset();
  }
};