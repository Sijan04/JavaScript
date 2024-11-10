console.clear();
const input = document.querySelector("input[name=name]");
input.addEventListener("change", changeHandler);


function changeHandler(event)
{
    console.log(event.target.value);

}

