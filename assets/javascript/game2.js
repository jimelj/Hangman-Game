var words = [  "walk",
  "square",
  "chop",
  "supreme",
  "agree",
  "stitch",
  "hurry",
  "bag",
  "repeat",
  "nonstop",
  "ratty",
  "letter",
  "pull",
  "addicted",
  "cats",
  "damaging",
  "level",
  "capable",
  "request",
  "paddle",
  "flat",
  "icicle",
  "windy",
  "replace",
  "thumb",
  "collect",
  "brick",
  "train",
  "flag",
  "explain",
  "window",
  "venomous",
  "trousers",
  "delirious",
  "blush",
  "health",
  "dusty",
  "elite",
  "lake",
  "rambunctious",
  "motion",
  "side",
  "attack",
  "descriptive",
  "authority",
  "grip",
  "upset",
  "spell",
  "pedal",
  "permissible",
  "servant",
  "eggnog",
  "worried",
  "drag",
  "laborer",
  "open",
  "jazzy",
  "friction",
  "umbrella",
  "greasy",
  "ocean",
  "slap",
  "crook",
  "calculate",
  "bawdy",
  "gate",
  "history",
  "territory",
  "serious",
  "careless",
  "unwritten",
  "hateful",
  "ship",
  "plug",
  "mug",
  "defiant",
  "song",
  "hushed",
  "receive",
  "vast",
  "develop",
  "gorgeous",
  "aback",
  "delight",
  "creator",
  "monkey",
  "rub",
  "glamorous",
  "play",
  "winter",
  "branch",
  "loving",
  "dress",
  "ambitious",
  "disapprove",
  "bow",
  "longing",
  "quarter",
  "hunt",
  "colorful"
];
var randomWord;
var wins=0;
var letterGuess;
var playsLeft =15;
var mainWord= [];
var bWord= [];


console.log("hello world");


function startGame () {
   randomWord = words[Math.floor(Math.random()*words.length)];
   console.log("Random word", randomWord, "I am inside startGame");
   var wordlength = randomWord.length;
   console.log("word length:", wordlength);
   playsLeft = 15;

   





}


startGame();

document.onkeyup = function() {
   letterGuess = String.fromCharCode(event.keyCode).toLowerCase();
   console.log(letterGuess);
   mainWord = randomWord.split("");
   console.log(mainWord);

if (mainWord.indexOf(letterGuess) === -1){
  playsLeft--;
  bWord.push(letterGuess);
  console.log("array of missed letters",bWord);
  console.log("playsleft",playsLeft);
}else {

}



if (playsLeft === 0) {
  playsLeft = 15;
  bWord = [];
  startGame();
}

var inj = "<p>Wins: " + wins + "</p>" +
"<p>Current Word: " + randomWord + "</p>" +
 "<p>Numbers of Guesses Remainig: " + playsLeft + "</p>" +
"<p>Letters Already Guessed: " + bWord.join(", ")  + "</p>" ;
// <h2>Wins</h2>
// <h2>Current Word</h2>
// <h2>Numbers of guesses Remaining</h2>
// <h2>Letters already guessed</h2>


document.querySelector('#game').innerHTML = inj;

console.log(bWord, "THE END");
}
