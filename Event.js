//Load,Unload Event
//scroll
//resize
//toggle




window.addEventListener("load",function(){

    console.log("Load");

});



window.addEventListener("unload",function(){

    console.log("unload");

});



window.addEventListener("resize",function(){

    console.log("resize");

});

const details = document.querySelector("details");

details.addEventListener("toggle",function(){


    console.log("toggle On");

});