// let validationSuccess;
// const submit_button=document.querySelector(".button");
// submit_button.onclick=()=>{
//     const fname=document.getElementById("fname").value;
//     const lname=document.getElementById("lname").value;
//     const email=document.getElementById("email").value;
//     const pass=document.getElementById("pass").value;
//     const cpass=document.getElementById("cpass").value;

//     // localStorage.setItem('FirstName',fname);
//     // localStorage.setItem('LastName',lname);
//     // localStorage.setItem('Email',email);
//     // localStorage.setItem('Password',pass);
//     // localStorage.setItem('Cpassword',cpass);
//     const  emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     validationSuccess=true;
// if(fname=="" || lname=="" || email=="" || pass=="" || cpass==""){
//     alert("please give the value");
//     validationSuccess=false;
// }

// else if (!email.match(emailRegex)) {
//     alert("please give valid email");
//     validationSuccess=false;
// }
// else if (pass!==cpass){
//         alert("password not match");``
//         validationSuccess=false
//     }
// else{
//         alert('successfully registered');
//     }
//     if(validationSuccess===true) {
//         localStorage.setItem('FirstName',fname);
//             localStorage.setItem('LastName',lname);
//             localStorage.setItem('Email',email);
//             localStorage.setItem('Password',pass);
//             localStorage.setItem('Cpassword',cpass);
//         }
// }



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
    else if (!email.match(emailRegex)) {
        alert("please give valid email");
        validationSuccess=false;
    }
    else if (pass!==cpass){
        alert("password not match");
        validationSuccess=false
    }
    else {
        alert('successfully registered');
    }

    if(validationSuccess===true) {
        let formDataArray = JSON.parse(localStorage.getItem('formDataArray')) || [];
        formDataArray.push(formData);
        localStorage.setItem('formDataArray', JSON.stringify(formDataArray));
    }
}

