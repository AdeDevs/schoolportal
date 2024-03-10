const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active"); 
}))

function OpenMenu() {
    document.getElementById("close").style.display = "initial";
    document.getElementById("menu").style.display = "none";
}

function CloseMenu() {
    document.getElementById("close").style.display = "none";
    document.getElementById("menu").style.display = "initial";
}