function  bjDomTst() {

   // alert("In function bjDomTst()");

    var data = '[ { "venue": "Super Shag","date":"Oct 6","time":" 9:00PM", "lesson" : "swing", "Website":"ss@dance.org"},'
               + '{ "venue": "Todos",     "date":"Oct 7","time":" 8:00PM", "lesson" : "Tango", "Website":"Paul@dance.org" } ]' ;
    var jobj = JSON.parse(data);

    console.log(jobj[0].venue);

    document.getElementsByTagName
    const el_div = document.getElementsByTagName('div');
     

    const el_h1 = el_div[0].querySelector('h1');
    el_h1.textContent = "Thursday";
    el_h1.style.paddingTop   = "18px";
    el_h1.style.marginBottom = "18px";

    const el_p1 = el_div[0].getElementsByTagName('p');
    //const el_p1 = document.getElementById('idp');

    el_p1[0].textContent      = jobj[0].venue; //"SuperShag";
    el_p1[0].style.fontSize   = "1.4em";
    el_p1[0].style.fontWeight = "Bold";
    el_p1[0].style.textDecoration = "underline";

    const cel = document.createElement("h3");
    cel.textContent = "Dance 9:00";
    el_div[0].append(cel);

    el_div[0].innerHTML +=  "<h3>Lesson 8:15 </h3> <h3> Waltham, Ma.</h3>" ;
   


    ///////////////////////////////////////////


    const el2_h1 = el_div[1].querySelector('h1');
    el2_h1.textContent = "Friday";
    el2_h1.style.paddingTop   = "18px";
    el2_h1.style.marginBottom = "18px";
    

/////////////////////////////////////

    const body = document.getElementsByTagName('body');
    const adDiv = document.createElement('div');
    const myDiv = body[0].append(adDiv);
    adDiv.innerHTML += "<h1> Saturday </h1>" + "<h2>DNE</h2>" + "<h2>Dance: 8:00</h2>";
    adDiv.innerHTML += "<a href={$jobj[1]:website}> Link</a>"

    
    //const el3_h1 = el_div[2].querySelector('h1');
//el_div.innerHTML = "help";
  
   // el3_h1.textContent = "Saturday";
   // el3_h1.style.paddingTop   = "18px";
//el3_h1.style.marginBottom = "18px";








    



   // ptg.textContent = "Saturday";
  //  ptg.style.fontWeight = "bold";
 //   ptg.style.fontSize=28;
   // ptg.innerHTML = '<h2>superShag</h2>' + '\r' + '\n' + " Saturday or SUnday";


//const bd = document.getElementsByName('nmTst');

//const bd = document.body;
//bd.innerText = "change pacenfe";

//const pt = bd.getElementsByTagName('<p>');


//console.log(pt.innerText);


}
