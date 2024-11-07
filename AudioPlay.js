
for(var i=0; i<3; i++){

    document.querySelectorAll(".myButton")[i].addEventListener("click", function(){

        var text =this.innerHTML;    
        console.log(text);

        switch(text)
        
        {

            case "Button 1":
                var audio =new Audio("h.mp3");
                audio.play();


                case "Button 2":
                    var audio =new Audio("2.wav");
                    audio.play();



                    case "Button 3":
                        var audio =new Audio("1.wav");
                        audio.play();


        }

    });


}


