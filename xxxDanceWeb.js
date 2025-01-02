function  DanceDom() {

   //alert("In function DanceDom()");

    var data = '[ { "venue": "Super Shag", "date":"Nov 9 2024","time":" 9:00", "type":"Ballroom", "lesson": "7:00", "Website":"ss@dance.org"   },'
               + '{ "venue": "Todos",      "date":"Nov 7 2024","time":" 8:00", "type":"WCS",      "lesson": "7:15", "Website":"Paul@dance.org" },' 
               + '{ "venue": "Dantes",     "date":"Nov 8 2024","time":" 9:00", "type":"Mambo",    "lesson": "8:15", "Website":"Dantesl@dance.org" },' 
               + '{ "venue": "KaDanse",    "date":"Nov 8 2024","time":" 8:00", "type":"Salsa",    "lesson": "6:15", "Website":"Paul@dance.org" },' 
               + '{ "venue": "ABL",        "date":"Nov 9 2024","time":" 7:00", "type":"Salsa",    "lesson": "7:30", "Website":"ABL@dance.org"  } ]';

    var dlink = [ {"venue":"Todos","link":"www.todos.com"}, {"venue":"Super Shag", "link":"www.SupeShag.com"},  {"venue":"KaDanse",    "link":"www.kadanse.com"} ,
       {"venue":"Dantes",    "link":"www.Dantes.com"} ];


    var jobj = JSON.parse(data);
   

  //Find all entries mpp date o day-o-week
    var dateDay = new Array();;
    let d       = new Date( );
    var i=0;
    Array.from(jobj).forEach( function(item){ 
        d = new Date(item.date);
        dateDay[i++] = d.getDay();
       // console.log("day:  " +  dateDay[i-1]);
    }  );



    const el_bx_thur = document.getElementById('thurs');
    const el_bx_fri  = document.getElementById('fri'  );
    const el_bx_sat  = document.getElementById('sat'  );
 

 
    ///////// THURSDAY  ////////////////////
    //let el_h2 = el_bx_thur.getElementsByTagName('h2');
    // console.log(el_h2);
    // el_h2[0].textContent = jobj[0].venue;
    //  let el_thur_li = el_bx_thur.getElementsByTagName("li");
    // el_thur_li[0].textContent = jobj[0].type;
    // el_thur_li[1].textContent = "Lesson " + jobj[0].lesson;
    //  el_thur_li[2].textContent = "Dance "  + jobj[0].time;


    

    //////  EDIT   //////////////////////////////
    let el_li = el_bx_sat.getElementsByTagName("li");
    let el_ul = el_bx_sat.getElementsByTagName('<ul>');


    //go thru  dance list
    for (i=0; i<7;i++)
    { 

        if( dateDay[i] == 4)//fri
        { 
        // console.log( i + " =>Friday");
        //el_bx_thur.innerHTML += "<h2>" +  jobj[i].venue + "</h2>";
        //el_bx_thur.innerHTML += "<h3>" +  jobj[i].type + "</h3>";
        //el_bx_thur.innerHTML += "<h3>" +  "Lesson: " + jobj[i].lesson + "</h3>";
        //el_bx_thur.innerHTML += "<h3>" +  "Dance: "  + jobj[i].time   + "</h3>"; 
        //el_bx_thur.innerHTML += "******" + "<br\>";
        //  el_bx_thur.innerHTML += "<h2>" +  jobj[i].venue + "</h2>";


          for (k=0; k<dlink.length; k++) {
             if ( dlink[k].venue == jobj[i].venue ){
             // console.log(dlink[k].venue);
              el_bx_thur.innerHTML += "<h2><a href=" + dlink[k].link + ">" + jobj[i].venue + "</a></h2>";
          }

        }

        el_bx_thur.innerHTML += "<h3>" +  jobj[i].type  + "</h3>";
        el_bx_thur.innerHTML += "<h3>" +  "Lesson: " + jobj[i].lesson + "</h3>";
        el_bx_thur.innerHTML += "<h3>" +  "Dance: "  + jobj[i].time   + "</h3>";
        el_bx_thur.innerHTML += "******" + "<br\><br\>";

        }
          
    
        // el_bx_fri.getElementsByTagName('li');
        // el_fri_li  = el_bx_fri.getElementsByTagName("li");
    
        
        if( dateDay[i] == 5)  {//fri  

          for (var j=0; j<dlink.length; j++) {
            if ( dlink[j].venue == jobj[i].venue ){
             console.log("Friday::  " + dlink[j].link);
            el_bx_fri.innerHTML += "<h2><a href=" + dlink[j].link + ">" + jobj[i].venue + "</a></h2>";
           //  el_bx_fri.inn('<h2>HI</h2>');
            }
          }
           
          // el_bx_fri.innerHTML += "<h2>" +  jobj[i].venue + "</h2>";
          el_bx_fri.innerHTML += "<h3>" +  jobj[i].type  + "</h3>";
          el_bx_fri.innerHTML += "<h3>" +  "Lesson: " + jobj[i].lesson + "</h3>";
          el_bx_fri.innerHTML += "<h3>" +  "Dance: "  + jobj[i].time   + "</h3>";
          el_bx_fri.innerHTML += "******" + "<br\><br\>";
        }



        if ( dateDay[i] == 6) //sat
        { 
           // el_sat_li[0].textContent = jobj[i].venue;
           // el_sat_li[1].textContent = jobj[i].type;
           // el_sat_li[2].textContent = jobj[i].lesson;

          el_bx_sat.innerHTML += "<h2>" +  jobj[i].venue + "</h2>";
          el_bx_sat.innerHTML += "<h3>" +  jobj[i].type  + "</h3>";
          el_bx_sat.innerHTML += "<h3>" +  "Lesson: " + jobj[i].lesson + "</h3>";
          el_bx_sat.innerHTML += "<h3>" +  "Dance: "  + jobj[i].time   + "</h3>";
          el_bx_sat.innerHTML += "******" + "<br\><br\>";
        }
       
      }
    //const el_h1 = el_div[0].querySelector('h1');
    //el_h1.textContent = "Balera";
    //el_h1.style.paddingTop   = "18px";
    //el_h1.style.marginBottom = "18px"
    //el_li[0].textContent      = jobj[0].venue; //"SuperShag";
    //el_li[0].style.fontSize   = "1.4em";
    //el_li[0].style.fontWeight = "Bold";
    //el_li[0].style.textDecoration = "underline";


}