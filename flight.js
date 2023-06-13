function validate() {
   
let validationSuccess;


   
    const fname=document.getElementById("fname").value;
    const lname=document.getElementById("lname").value;
    const email=document.getElementById("email").value;
    const pwd=document.getElementById("pwd").value;
    const mobile=document.getElementById("mobile").value;
    const flight=document.getElementById("flight").value;
    const flying=document.getElementById("flying").value;
    const flying1=document.getElementById("flying1").value;

const formData = [fname, lname, email, pwd, mobile,flight,flying,flying1];

    validationSuccess=true;
    if (document.getElementById("fname").value == "") {
      //userfnamevalid = false;
      validationSuccess=false;
      document.getElementById("userfnameflight").innerHTML = "Please enter a value";
      document.getElementById("userfnameflight").style.color = "red";
    } else {
    //   userfnamevalid = true;
     document.getElementById("userfnameflight").innerHTML = "";
      document.getElementById("userfnameflight").style.color = "green";
    }
    if (document.getElementById("lname").value == "") {
        //userlnamevalid = false;
        validationSuccess=false;
        document.getElementById("userlnameflight").innerHTML = "Please enter a value";
        document.getElementById("userlnameflight").style.color = "red";
      } else {
       // userlnamevalid = true;
       document.getElementById("userlnameflight").innerHTML = "";
        document.getElementById("userlnameflight").style.color = "green";
      }
      if (document.getElementById("email").value == "") {
        
        //useremailvalid = false;
        validationSuccess=false;
        document.getElementById("useremailflight").innerHTML = "Please enter a value";
        document.getElementById("useremailflight").style.color = "red";
      } else {
        // useremailvalid = true;
       document.getElementById("useremailflight").innerHTML = "";
        document.getElementById("useremailflight").style.color = "green";
      }
      if (document.getElementById("pwd").value == "") {
        //userpwdvalid = false;
        validationSuccess=false;
        document.getElementById("userpwdflight").innerHTML = "Please enter a value";
        document.getElementById("userpwdflight").style.color = "red";
      }
      else if(pwd.length<8){
        document.getElementById("userpwdflight").innerHTML = "password must be 8 char";
        document.getElementById("userpwdflight").style.color = "red";
} 
else {
        //userpwdvalid = true;
        document.getElementById("userpwdflight").innerHTML = "";
        document.getElementById("userpwdflight").style.color = "green";
      }
      if (document.getElementById("mobile").value == "") {
        //usermobilevalid = false;
        validationSuccess=false;
        document.getElementById("usermobileflight").innerHTML = "Please enter a value";
        document.getElementById("usermobileflight").style.color = "red";
      }
      else if(mobile.length<10){
        document.getElementById("usermobileflight").innerHTML = "mobile number must be 10 char";
        document.getElementById("usermobileflight").style.color = "red";
      } 
      else {
        //usermobilevalid = true;
        document.getElementById("usermobileflight").innerHTML = "";
        document.getElementById("usermobileflight").style.color = "green";
      }
      if (document.getElementById("flight").value == "") {
        //userflightvalid = false;
        validationSuccess=false;
        document.getElementById("userflightflight").innerHTML = "Please enter a value";
        document.getElementById("userflightflight").style.color = "red";
      } else {
        //userflightvalid = true;
        document.getElementById("userflightflight").innerHTML = "";
        document.getElementById("userflightflight").style.color = "green";
      }
      if (document.getElementById("flying").value == "") {
        //userflyingvalid = false;
        validationSuccess=false;
        document.getElementById("userflyingflight").innerHTML = "Please enter a value";
        document.getElementById("userflyingflight").style.color = "red";
      } else {
        //userflyingvalid = true;
        document.getElementById("userflyingflight").innerHTML = "";
        document.getElementById("userflyingflight").style.color = "green";
      }
      if (document.getElementById("flying1").value == "") {
        //userflying1valid = false;
        validationSuccess=false;
        document.getElementById("userflying1flight").innerHTML = "Please enter a value";
        document.getElementById("userflying1flight").style.color = "red";
      } else {
       // userflying1valid = true;
        document.getElementById("userflying1flight").innerHTML = "";
        document.getElementById("userflying1flight").style.color = "green";
      }
      if(validationSuccess){
        alert("successfully submited");
      }
      if(validationSuccess===true) {
        let formDataArray = JSON.parse(localStorage.getItem('formDataArray')) || [];
        formDataArray.push(formData);
        localStorage.setItem('formDataArray', JSON.stringify(formDataArray));
    }
}





