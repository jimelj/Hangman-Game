var wins = "0";
var losses = 15;
var guessed = "0";
var letterGuess = 0;
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
var wordsArr =[];



var randomWord = words[Math.floor(Math.random()*words.length)];

document.onkeyup = function () {

  console.log(randomWord);
var letterGuess = String.fromCharCode(event.keyCode).toLowerCase();

console.log("Letter choice :", letterGuess);



console.log("indexof",randomWord.indexOf(letterGuess));

if (randomWord.indexOf(letterGuess) === -1) {
    wordsArr.push(letterGuess);
    losses--;
    console.log("losses:", losses);
}
if(losses === 0){
  randomWord = words[Math.floor(Math.random()*words.length)];
  losses = 15;
  wordsArr = [];

}



console.log("array", wordsArr);

var inj = "<p>Wins: " + wins + "</p>" +
"<p>Current Word: " + randomWord + "</p>" +
 "<p>Numbers of Guesses Remainig: " + losses + "</p>" +
"<p>Letters Already Guessed: " + wordsArr.join(", ")  + "</p>" ;
// <h2>Wins</h2>
// <h2>Current Word</h2>
// <h2>Numbers of guesses Remaining</h2>
// <h2>Letters already guessed</h2>


document.querySelector('#game').innerHTML = inj;
}



//FOR LATER TO REVIEW
// for (var i = 0, len = str.length; i < len; i++) {
//   alert(str[i]);
// }
