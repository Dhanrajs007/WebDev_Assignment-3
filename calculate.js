const side = document.querySelectorAll(".side-input");
const button = document.querySelector(".button");
const output = document.querySelector("#output");

const Calculate = () => {
    if (side[0].value > 0 && side[1].value > 0){
        const hsquare = side[0].value ** 2 + side[1].value ** 2;
        const hypotenuse = Math.sqrt(hsquare); 
        output.innerText = "The value of hypotenuse is :- " + hypotenuse ;
    }else{
        output.innerText = "Enter positive values for sides !!";
    }
};

button.addEventListener("click",Calculate);