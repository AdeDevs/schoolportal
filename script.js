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

// var test = document.getElementsByClassName("navbar");
// var main = document.getElementsByClassName("dashboard-main");
// var content = document.getElementsByClassName("dashboard-content");
// var menu = document.getElementsByClassName("dashboard-menu");
// var nav = document.getElementsByClassName("nav-menu");

// var firstElementStyle = test[0].style;
// var secondElementStyle = main[0].style;
// var thirdElementStyle = content[0].style;
// var fourElementStyle = menu[0].style;
// var navElementStyle = nav[0].style;


// function doc ()  {
//     firstElementStyle.backgroundColor = "black"
//     secondElementStyle.backgroundColor = "black"
//     thirdElementStyle.backgroundColor = "black"
//     thirdElementStyle.color = "#fff"
//     fourElementStyle.backgroundColor = "black"
//     navElementStyle.backgroundColor = "black"
//     navElementStyle.color = "white"
// }