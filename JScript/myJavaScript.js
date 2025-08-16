
function  doHTML()
{
    console.log("Entering Script");

    var hdg = document.getElementById("hdg1");

    let list = document.getElementById("list");

    console.log(hdg);

    hdg.innerText = "THINGS TO DO!!!"

    list.innerHTML = "<li> Heidi's Dance</li>"

}