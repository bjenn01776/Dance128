

// function addEvent(elem, eventType, handler) {

//     if (elem.addEventListener) {
//         elem.addEventListener('click', handler, false);
//     } else if (elem.attachEvent) {
//         elem.attachEvent("on" + eventType, handler);
//     } else {
//         elem["on" + eventType] = handler;
//     }   

function hamMenu(e) {
    //var ham = document.getElementsByClassName("hamburger");
    const hamburger = document.getElementById("hamb" ); 
    const sidebar   = document.querySelector('.sidebar');
    console.log( "sidebar::" + sidebar.style.backgroundColor );
    console.log( "ham1::" + hamburger.classList.contains("hamburger")  ); 
    console.log( "ham::" + hamburger.innerHTML);
    hamburger.addEventListener("click", function(e){
        e.preventDefault();
        this.classList.toggle('active');
     
        console.log("hamburgler");
        hamburger.style.backgroundColor = this.classList.contains('active') ? 'purple' : 'green';
        // hamburger.style.left            = this.classList.contains('active') ? '60px' : '10px';
        sidebar.style.left = this.classList.contains('active') ? '64%' : '-200px';
        // sidebar.style.right             = this.classList.contains('active') ? '200px' : '-200px'; 
        sidebar.style.display = this.classList.contains('active') ? 'block' : 'none';
      hamburger.classList.toggle('hamburger_90');
       sidebar.style.transition = 'all 0.9s ease-in-out';








        // if ( ham.classList.contains("hamburger_90") ){
        //      ham.classList.replace("hamburger_90", "hamburger" );
        // }
        // else {
        //      ham.classList.replace("hamburger", "hamburger_90" );
             
        //     }
        // if(sidebar.style.display === "block"){
        //     sidebar.style.display = "none";
        //     sidebar.style.transition = 'all 0.8s ease-in-out';  
        //     sidebar.style.left = "200x";
        // }
        // else{
        //     sidebar.style.display = "block";
        //     sidebar.style.left = "-200px";
        // }
       // transition( .8 );
        //  hamburger.classList.toggle('hamburger_90');
        console.log( "click evt ham"   );
        

       
   }) };