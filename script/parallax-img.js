const parallax = document.querySelectorAll(".parallax");

parallax[0].style.backgroundImage = "url('https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')";
parallax[0].style.backgroundPosition = "top left";

parallax[1].style.backgroundImage = "url('https://images.pexels.com/photos/1887792/pexels-photo-1887792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')";



/*
https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
*/

/*
https://images.pexels.com/photos/715134/pexels-photo-715134.jpeg?cs=srgb&dl=pexels-ben-cheung-715134.jpg&fm=jpg
*/



//função anônima com retorno
let sum = function(num1, num2){
    return num1 + num2;
}
function test1(){
    console.log("new function");
}


console.log(sum(5, 10));

test1();

function getPersonInfo(person){
    return person = {
        name: null,
        age: null,
        weight: 0,
        country: null
    }
}

console.log(getPersonInfo());

const firstName = document.querySelector(".first-name");
const lastName = document.querySelector(".last-name");
const birthday = document.querySelector(".birthday");
const email = document.querySelector(".email");
const password = document.querySelector(".password");

