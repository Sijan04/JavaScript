// Guess number game 

var numOfWon =0;
var numOfLost =0;

for(var i=0; i<=5; i++)
{
    var guessNumber = parseInt(prompt("Enter a number form 1 to 5: "));

    var randomNumber =Math.floor(Math.random() * 5)+1;   //Logic

    if (guessNumber == randomNumber)
    {
        console.log("You have won");

        numOfWon++;
    }else {
            
        console.log("You have lost.Random number was " + randomNumber);

        numOfLost++;


    }
}

document.write("Total number of won = " + numOfWon + "<br>");
document.write("Total number of lost = " + numOfLost +"<br>");