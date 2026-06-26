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

function signUp(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmpassword = document.getElementById("confirmpassword").value;
    let error = document.getElementById("error");

    if(password === confirmpassword){
        localStorage.setItem("password" , password);
        localStorage.setItem("confirmpassword", confirmpassword);

        window.location.href = "Login.html";
    }else{
        error.innerHTML = "Invalid Passwors you entered";
    }
}

// Function For Show password or hide
function showPass(){
    let password = document.getElementById("password");

    if(password.type==="password"){
        password.type="text";
    }else{
        password.type="password";
    }
}

function showconfPass(){
    let password = document.getElementById("confirmpassword");

    if(password.type==="password"){
        password.type="text";
    }else{
        password.type="password";
    }
}

// Function for Menu Icon toggler
// function toggleMenu() {
//     let menu = document.getElementById("navmenu");
//     let icon = document.getElementById("menuIcon");

//     if (menu.classList.contains("show")) {
//         menu.classList.remove("show");
//         icon.classList.remove("fa-xmark");
//         icon.classList.add("fa-bars");
//     } else {
//         menu.classList.add("show");
//         icon.classList.remove("fa-bars");
//         icon.classList.add("fa-xmark");
//     }
// }

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});



// Function for filter

document.getElementById("allbtn").onclick = showAll;

function showAll() {
    document.getElementById("menucards").style.display = "flex";
}

document.getElementById("burgerBtn").onclick = showBurger;
function showBurger() {
    document.getElementById("burgerCard").style.display = "block";
    document.getElementById("pizzaCard1").style.display = "none";
    document.getElementById("pizzaCard2").style.display = "none";
}
