//create a function called highest score that return highest score value

console.clear();
function HighestScore(scores)
{
   var max =scores[0]; 
   for(var x=1; x<scores.length; x++)
   {
      if(max < scores[x])
      {
        max = scores[x];
      }
   }
   return max;
}

var scores =[21,23,2,5,99];
var maxScore = HighestScore(scores);
console.log(maxScore);