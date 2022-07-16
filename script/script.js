const nav = document.querySelector(".navbar");

document.querySelector(".icon").addEventListener("click", function(){
    if(nav.className === "navbar"){
        nav.className += " mobile";
    } else {
        nav.className = "navbar";
    }
})


const copyright = document.querySelector("footer p");
let year = new Date().getFullYear();
copyright.textContent += " - " + year;