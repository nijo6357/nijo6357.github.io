const input = document.querySelector("#tbInput")
input.innerHTML = "";

function del() {
    
    input.innerHTML = ""
}







function submit() {  
    let Length = input.textContent
    console.log(typeof Length);
  
    console.log(Length)
    if (Length.length == 10) {
        alert("Thank you for your phone number, I will sell it to data companies :)");
        input.innerHTML = ""
    }
    else  {
        alert ("THATS NOT THE CORRECT NUMBER OF DIGITS FOR A PHONE NUMBER! TRY AGAIN!");
        input.innerHTML = ""
    }
    
}










const zero = document.querySelector("#zero")
const one = document.querySelector("#one")
const two = document.querySelector("#two")
const three = document.querySelector("#three")
const four = document.querySelector("#four")
const five = document.querySelector("#five")
const six = document.querySelector("#six")
const seven = document.querySelector("#seven")
const eight = document.querySelector("#eight")
const nine = document.querySelector("#nine")




zero.addEventListener("click", enterZero)


function enterZero () {
    console.log("zero");
    input.innerHTML+="0";

}



one.addEventListener("click", enterOne)

function enterOne () {
    console.log("one")
    input.innerHTML+="1";
    
}

two.addEventListener("click", enterTwo)

function enterTwo () {
    console.log("two")
    input.innerHTML+="2";
}

three.addEventListener("click", enterThree)

function enterThree () {
    console.log("three")
    input.innerHTML+="3";
}

four.addEventListener("click", enterFour)

function enterFour () {
    console.log("four")
    input.innerHTML+="4";
}

five.addEventListener("click", enterFive)

function enterFive () {
    console.log("five")
    input.innerHTML+="5";
}

six.addEventListener("click", enterSix)

function enterSix () {
    console.log("six")
    input.innerHTML+="6";
}

seven.addEventListener("click", enterSeven)

function enterSeven () {
    console.log("seven")
    input.innerHTML+="7";
}

eight.addEventListener("click", enterEight)

function enterEight () {
    console.log("eight")
    input.innerHTML+="8";
}

nine.addEventListener("click", enterNine)

function enterNine () {
    console.log("nine")
    input.innerHTML+="9";
}


