// Login Function
function login(){
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    error.textContent = "";

    const savedEmail = localStorage.getItem("userEmail");
    const savedPassword = localStorage.getItem("userPassword");

    // Default admin login
    if(email === "admin@123" && password === "pass123"){
        localStorage.setItem("isLoggedin", "true");
        localStorage.setItem("user", email);
        window.location.href = "./index.html";
        return;
    }

    // Registered user login
    if(email === savedEmail && password === savedPassword){
        localStorage.setItem("isLoggedin", "true");
        localStorage.setItem("user", email);
        localStorage.setItem("userName", localStorage.getItem("registeredName") || "");
        window.location.href = "./index.html";
    }else{
        error.textContent = "Invalid email or password!";
    }
}

// Sign-Up Function
function signUp(){
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmpassword").value;
    const error = document.getElementById("error");

    error.textContent = "";

    if(name === "" || email === "" || password === "" || confirmPassword === ""){
        error.textContent = "Please fill in all fields.";
        return;
    }

    if(password.length < 6){
        error.textContent = "Password must contain at least 6 characters.";
        return;
    }

    if(password !== confirmPassword){
        error.textContent = "Passwords do not match!";
        return;
    }

    if(email === "admin@123"){
        error.textContent = "Please use a valid email address.";
        return;
    }

    localStorage.setItem("registeredName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Account created successfully! Please login.");
    window.location.href = "./Login.html";
}

// Show or Hide Password
function showPass(){
    const password = document.getElementById("password");

    if(password){
        password.type = password.type === "password" ? "text" : "password";
    }
}

// Show or Hide Confirm Password
function showconfPass(){
    const password = document.getElementById("confirmpassword");

    if(password){
        password.type = password.type === "password" ? "text" : "password";
    }
}

// Mobile Navbar Toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if(menuToggle && navLinks){
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// Menu Filters
const allButton = document.getElementById("allbtn");
const menuCards = document.getElementById("menucards");

if(allButton && menuCards){
    allButton.addEventListener("click", showAll);
}

function showAll(){
    if(menuCards){
        menuCards.style.display = "flex";

        menuCards.querySelectorAll(".food-card").forEach(card => {
            card.style.display = "block";
        });
    }
}

function showCategory(category){
    if(!menuCards) return;

    menuCards.querySelectorAll(".food-card").forEach(card => {
        card.style.display = card.dataset.category === category ? "block" : "none";
    });
}

const burgerButton = document.getElementById("burgerBtn");

if(burgerButton){
    burgerButton.addEventListener("click", () => showCategory("burger"));
}

const pizzaButton = document.getElementById("pizzaBtn");

if(pizzaButton){
    pizzaButton.addEventListener("click", () => showCategory("pizza"));
}

const noodlesButton = document.getElementById("noodlesBtn");

if(noodlesButton){
    noodlesButton.addEventListener("click", () => showCategory("noodles"));
}

const manchurianButton = document.getElementById("manchurianBtn");

if(manchurianButton){
    manchurianButton.addEventListener("click", () => showCategory("manchurian"));
}

const pastaButton = document.getElementById("pastaBtn");

if(pastaButton){
    pastaButton.addEventListener("click", () => showCategory("pasta"));
}

const coffeeButton = document.getElementById("coffeeBtn");

if(coffeeButton){
    coffeeButton.addEventListener("click", () => showCategory("coffee"));
}