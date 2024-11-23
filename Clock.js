const saveButton =document.querySelector(".save-btn");
const message = document.querySelector(".message");

saveButton.addEventListener("click", startclock);

function startclock()
{
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let time = hours + ":" + minutes + ":" + seconds;

    //console.log(time);

    message.textContent= time;

    setInterval(startclock,1000);

}
