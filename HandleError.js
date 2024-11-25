//error handle -try,catch,finally

//the throw statement -> create custome error


document.querySelector("#check").addEventListener("click",function(){
var num= document.querySelector("#num1").value;


try{


    if(num < 5)
    {
        throw "input is to low"
    }else if(num > 10)
    {
        throw " input is to high"
    }

}catch(err){
    console.log(err);
}
})
