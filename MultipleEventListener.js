document.querySelectorAll(".myButton")[0].addEventListener("click",function() {


    var text =this.innerHTML;   //this diye button er text ta niye ashbe
    document.querySelector("h1").innerHTML= text + " is clicked";


});