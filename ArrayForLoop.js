//var Number = [10,20,30,40,50];

//for(var i=0; i<5; i++)

  //  {
    //    document.write(Number[i] + "<br>");
    //}



 var num = new Array();
 for(var i=0; i<5; i++)
    {
        num[i]= parseInt(prompt("Enter Number: "));
    }   
var sum =0;

for (var i=0; i<5; i++)
{
    document.write(num[i]);
    sum =sum+ num[i];
}

document.write("Sum: " + sum);