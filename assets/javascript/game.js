//
//pseudo code
//
//
// ?? How to solve this problem and create steps to solve problem ??

//Process. 
//       		
//		Computer chooses a letter
//      create variables userguess, computerchoice, totnum attempts wins losses	
//		Have a user guess a letter 
//      Let the computer randomly choose a letter from a partial list.
//
//		See if that letter matches the computerGuess[i]
//		if the user wins  add 1 to score
//		if the user loses add 1 to loss
//		there is a total of 5 attempts
//		display final message and exit after 5 attempts or if user wins
//
//  Declare variables and array

var computerChoices = ["a", "b", "c", "m", "s", "h", "y", "o", "z", "l", "k", "i", "f"]; 
var computerGuess = computerChoices[Math.floor(Math.random() 
* computerChoices.length)];


   
    var wins = 0;
    var losses = 0;
    var totNumTries = 0;
    var stop1 = false;

     //var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
 //   var computerGuess = "p";

while (stop1 == false)  {
    console.log("tot" + totNumTries);
    console.log(computerGuess)
    var yourGuess=prompt("Please guess what letter I am thinking of ?");
    console.log(yourGuess);

    if (yourGuess != computerGuess){
    console.log("my guess" + yourGuess);
    losses = losses + 1;    
    totNumTries = totNumTries + 1;
    alert("Nope, try again!")
    
        if (totNumTries > 4) {
            stop1 = true;
        }

} else {
    console.log("Its guess" + computerGuess);
    wins = wins + 1;
    totNumTries = totNumTries + 1;
    alert("WOW, you won !!!!!!")
    stop1 = true;
}
   console.log("now im at score");
    

    var html  = 
        "<p> The computers choice was:      " + computerGuess   + "</p>"  +
        "<p> Wins =       " + wins   + "</p>"    +
        "<p> Losses =       " + losses   + "</p>" +
        "<p> Total Num of guesses      " + totNumTries   + " out of 5 </p>"  ;
  
// use preselector to replace div.psygame with results

       document.querySelector('#psygame').innerHTML = html;
}           
    