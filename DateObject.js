
//Date & year print 

var date = new Date();
document.write(date + "<br>")     //today date print


var year = date.getFullYear();
document.write(year + "<br>")    //today year print

var month =date.getMonth();
document.write(month + "<br>") 

var currentDate =date.getDate();    //Today date print
document.write(currentDate + "<br>") 


var currentDay = date.getDay();   //Sunday start from 0 monday 1 .....
document.write(currentDay + "<br>")  

var currentHour = date.getHours(); // Hour
document.write(currentHour)


var currentMinures =date.getMinutes(); //min
document.write(currentMinures + "<br>")