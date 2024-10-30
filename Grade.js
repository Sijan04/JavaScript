 //Program for Task 
// Letter Grade Program. Happy coding

var marks = parseInt(prompt("Enter Marks : "))      //parseInt convert a string into an integer.

// checking the conditions
if (marks >= 80)
    document.write("A+")
else if (marks >= 70)
    document.write("A")
else if (marks >= 60)
    document.write("A-")
else if (marks >= 50)
    document.write("B")
else if (marks >= 40)
    document.write("C")
else if (marks >= 33)
    document.write("D")
else
    document.write("Sorry. You are Failed")