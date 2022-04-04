function sendMail(para){
    let msg={
        from_name:document.getElementById("name").value,
        from_email:document.getElementById("email").value,
        subject:document.getElementById("subject").value,
        message:document.getElementById("message").value,

    };
    emailjs.send("service_j4rcurb","template_ils8piu",msg);
    alert("Your message has been sent.Thank you!");

    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("subject").value="";
    document.getElementById("message").value="";
    


}
$("#formvalidation").validate({

    rules:{
      name:{
        minlength:4
      },
      email:{
        email:true
      }
    },
    messages: {
      name:{
        required: "Please enter your name",
        minlength: "Name at least 4 characters"
      },
      email:"Please enter your email",
      subject:"Please enter your subject",
      message:"Please type your message"
    },
  
  
    submitHandler: function(form) {
      form.submit();
    }
   });