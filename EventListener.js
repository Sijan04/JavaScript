/*document.querySelector("button").addEventListener("click",myfunction);

function myfunction()
{

  alert("Hello");

} */

var myvar =document.querySelector("h1");

myvar.addEventListener("mouseover",function(){

    //alert("hi");

   myvar.classList.add("MY-STYLE");


})

var myvar =document.querySelector("h1");

myvar.addEventListener("mouseout",function(){

    //alert("hi");

   myvar.classList.remove("MY-STYLE");


})
