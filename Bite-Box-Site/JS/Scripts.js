function login(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let error = document.getElementById("error");

    if(email==="admin@123" && password==="pass123")
    {
        localStorage.setItem("isLoggedin", "true");
        localStorage.setItem("user",email);

        window.location.href = "index.html";
    }
    else
        {
        error.innerHTML = "Inavlid email or password!!";
    }
}
function showPass(){
    let password = document.getElementById("password");

    if(password.type==="password"){
        password.type="text";
    }else{
        password.type="password";
    }
}