var names = ["Sijan ", "Sami", "Safi","Nafi"];
document.write(names + "<br>");


//shift is opposite use of pop

names.shift();
document.write(names + "<br>");


//unshift is the opposite of push

names.unshift("Sumi");
document.write(names + "<br>");


//splice method using add value in index 2 

names.splice (2,0, "Karim ","Zaki");
document.write(names);

