console.clear();
const programs = document.querySelectorAll("input [name=program]");
//console.log(codes);

Array.from(programs).map((program) => {

       program.addEventListener("change", programHandler);

});

function programHandler(e)
{
    if (e.target.checked){

        console.log(e.target.value);
    }
}