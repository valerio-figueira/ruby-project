const parallax = document.querySelectorAll(".parallax");

parallax[0].style.backgroundImage = "url('https://images.pexels.com/photos/715134/pexels-photo-715134.jpeg?cs=srgb&dl=pexels-ben-cheung-715134.jpg&fm=jpg')";

parallax[1].style.backgroundImage = "url('https://images.pexels.com/photos/1887792/pexels-photo-1887792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')";

/*
https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 
*/


const copyright = document.querySelector("footer p");
let year = new Date().getFullYear();
copyright.textContent += " - " + year;



const nav = document.querySelector(".navbar");
const mobileIcon = document.querySelector(".icon");

mobileIcon.addEventListener("click", function(){
    if(nav.className === "navbar"){
        nav.className += " mobile";
    } else {
        nav.className = "navbar";
    }
})


const submit = document.querySelector(".sign-in");

