
function calender() {

    console.log(" in calender()");

    const arrMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Decemeber"];
    var arrMonNDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const arrDay   = ["Sunday", "Monday", "Tuesday", "Wedsneday", "Thursday", "Friday", "Saturday"];

    let date = new Date();
    console.log("The date is::  " + date);
    date.setDate(1);
    var month = date.getMonth();
    console.log("The month is ::  " + month);
    let monthName = arrMonth[date.getMonth()]
    console.log("The month is ::  " + monthName)
    dow = date.getDay()
    console.log("The first of the month is on::  " + date.getDay())
    console.log("The first of the month is on::  " + arrDay[date.getDay()])

    let h1_Title = document.querySelector("#mname")
    h1_Title.innerText = monthName;

 
    let nMonDays = arrMonNDay[month];
    buildMonth(dow, nMonDays);
 


    let refBtn = document.getElementById("bup");
    refBtn.addEventListener("click", (evt) => {
        try {
            console.log(evt.target.textContent);
            month++;
            date = new Date(2025, month, 1);
            h1_Title.textContent = arrMonth[month] + "  😜";
            dow = date.getDay();
            nMonDays = arrMonNDay[month];
            buildMonth(dow, nMonDays);
        }
        catch (error) {
            console.log(err);
        }
    })

    let refBtnDwn = document.getElementById("bdwn");
    refBtnDwn.addEventListener("click", (evt) => {
        try {
            console.log(evt.target.textContent);
            month--;
            date = new Date(2025, month, 1);
            h1_Title.textContent = arrMonth[month] + "  🤔";
            dow = date.getDay()
            nMonDays = arrMonNDay[month];
            buildMonth(dow, nMonDays);
        }
        catch (error) {
            console.log(err);
        }
    })
}


let buildMonth = function (dow, nMonDays) {

    let calRef = document.getElementById('cal')


    let lst_blkDay = document.querySelectorAll('#cal .boxND');
    for (k = 0; k < lst_blkDay.length; k++) {
        lst_blkDay[k].remove();
    }

    let lstHTML = document.querySelectorAll('#cal .box');
    for (k = 0; k < lstHTML.length; k++) {
        lstHTML[k].remove();
    }

    let newDiv = document.createElement("div");
    newDiv.classList.add("boxND");
    for (j = 0; j < dow; j++) {
        newDiv = document.createElement('div');
        newDiv.className = "boxND";
        calRef.appendChild(newDiv);
    }

    for (k = 0; k < (nMonDays); k++) {
        newDiv = document.createElement('div');
        newDiv.className = "box";
        newH1 = document.createElement('h1');
        newH1.innerText = parseInt(k + 1);;
        newDiv.appendChild(newH1);
        calRef.appendChild(newDiv);

        newDiv.addEventListener("click", (e) => {
            try {
                console.log("Day click event");
                console.log(e.target.textContent + " " + nMonDays );
            }
            catch (e) {
                console.log(e);
            }
        });


    }

}