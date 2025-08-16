

function bjMail() {

   console.log("Entering bjEmail()");

   var template_ID = 'template_f641er3';
   var  service_ID = 'service_jry1tch';

   let objMail = {
      name:    document.getElementById("name").value,
      email:   document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
   }
   console.log(objMail)

   emailjs.send(service_ID, template_ID, objMail)
      .then( (res) => {
         console.log("bj Email Suceeded");
         console.log('SUCCESS!', res.status, res.text);
      })
      .catch((err) => alert("bj Email Failed!!!"));

   console.log("Exiting bjMail()");
   alert("Exiting bjMail()");
}
  
