const input=document.querySelector("input");

input.addEventListener("blur",function(){
    console.log("blur is occured");
});


input.addEventListener("focus",function(){
    console.log("focus is occured");
});

input.addEventListener("focusin",function(){
    console.log("focusin is occured");
});

input.addEventListener("focusout",function(){
    console.log("focusout is occured");
});