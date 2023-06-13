
const submit_button=document.querySelector(".button");
submit_button.onclick=()=>{
    const fname=document.getElementById("fname").value;
    const lname=document.getElementById("lname").value;
    const email=document.getElementById("email").value;
    const pass=document.getElementById("pass").value;
    const cpass=document.getElementById("cpass").value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const formData = [fname, lname, email, pass, cpass];

    let validationSuccess=true;
    if(fname=="" || lname=="" || email=="" || pass=="" || cpass==""){
        alert("please give the value");
        validationSuccess=false;
    }
}