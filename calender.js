
function calender() {
    console.log(" in calender()");

    const arrMonth = ["January", "February", "March", "April", "MAy", "June", "July", "August", "September", "October", "November", "Decemeber"];

    const arrDay = ["Sunday", "Monday", "Tuesday", "Wedsneday", "Thursday", "Friday", "Saturday"];

    let dt = new Date();
    // let dt = new Date("Novemberr,1, 2025");

    console.log("Today's date is::  " + dt);

    let mon = dt.getMonth();
    console.log("The month is ::  " + mon);

    let monthName = arrMonth[dt.getMonth()]

    console.log("The month is ::  " + monthName)

    let monprt = null;
    try {
        monprt = document.getElementsByClassName('month');
        // monprt.style.background_color = "gray";
        monprt.textContent = "TEWTER";
        monprt.style.borderwidth = "10px";

    }
    catch (e) {
        console.log(e);
    }




    let h1Tag = document.querySelector("#mname")
    h1Tag.innerText = monthName;


    dt.setDate(2025, dt.getMonth() + 1, 1);
    let date = new Date(2025, mon, 1)
    dow = date.getDay()
    console.log("The first of the month is on::  " + date.getDay())
    console.log("The first of the month is on::  " + arrDay[date.getDay()])

    let newDiv
    let newH1
    let bd = document.getElementById('cal');



    for (j = 0; j < dow; j++) {
        newDiv = document.createElement('div');
        newDiv.className = "boxND";
        newH1 = document.createElement('h1');
        // newH1.innerText = parseInt(k);;
        newDiv.appendChild(newH1);

        //console.log(bd.innerText);
        bd.appendChild(newDiv);
    }

    for (k = 1; k < 32; k++) {
        newDiv = document.createElement('div');
        newDiv.className = "box";
        newH1 = document.createElement('h1');
        newH1.innerText = parseInt(k);;
        newDiv.appendChild(newH1);

        // console.log(bd.innerText);
        bd.append(newDiv);
    }




    let listBox = document.getElementsByClassName("box");
    console.log(typeof (listBox));

    h1Tag.addEventListener("mouseover", event => { h1Tag.textContent = "mouver " + "😜" });
    h1Tag.addEventListener("mouseout", event => { h1Tag.textContent = "mouy "+ "🤔" });

    for (kk = 1; kk < listBox.length; kk++) {
        listBox[kk].addEventListener("click", (e) => {
            console.log("event");
            console.log(listBox[kk].textContent)
        }
        );

    }
}

