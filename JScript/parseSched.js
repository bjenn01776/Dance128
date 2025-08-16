//const fs = require('fs');

console.log("In Parser!!!");

fs.readFile('../DanceSched.txt','utf-8',(err,data)=>{

    if(err)
        console.log("File Read Error!!!")
    else{  
        console.log("File Read OK") ;
        console.log("Type of Data::  " + typeof data);
        //console.log(data);   }

         let ArrDance = data.split('\n')

        console.log(ArrDance[2])
        console.log(ArrDance[3])
        console.log(ArrDance[5])

        //ArrDance.map(dispFc);
        let  tightSched = ArrDance.filter(cmprss)
        console.log(tightSched[2])
        console.log(tightSched[3])
        console.log(tightSched[5])

        toks = tightSched[3].split(",");

        console.log(toks);

       let sel =  document.getElementById("blk1")

       sel.innerText = toks[0];
       sel.innerText = toks[1];
       sel.innerText = toks[2];
       sel.innerText = toks[3];
       sel.innerText = toks[4];



       // console.log(tightSched)

        // console.log(ArrDance)
    }

})

function cmprss(elem){
    return elem.length > 2 ;
}

function dispFc(elem){
    if (elem.length > 2 )
    {
       // console.log("len::  " + elem.length)
        console.log("+++" + elem)
    }    
 }