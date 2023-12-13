const input = document.querySelector("#tbInput")

function del() {
     /* var tbInput = document.getElementById("tbInput");
    tbInput.value = tbInput.value.substr(0, tbInput.value.length - 1);
    console.log("backspace") */
    input.innerHTML = ""
}

function submit() {    
    
    if (length == 2) {
        alert("Thank you for your phone number, I will sell it to data companies :)");
    }
    else  {
        alert ("THATS NOT THE CORRECT NUMBER OF DIGITS FOR A PHONE NUMBER! TRY AGAIN!");
        input.innerHTML = ""
    }
    
}




 /* function type () {
    var buttonInput = document.getElementsById ("tbInput");
    buttonInput.value = 
} */






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

function numLength (){
    article
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


// to get buttons to move

/* I got help from this website with making buttons move: https://stackoverflow.com/questions/72053970/how-to-make-a-button-move
I adjusted speed, direction, variables, added many more instances*/


/*
var button1 = document.getElementById("zero")
var button2 = document.getElementById("one");
var button3 = document.getElementById("two");
var button4 = document.getElementById("three");
var button5 = document.getElementById("four");
var button6 = document.getElementById("five");
var button7 = document.getElementById("six");
var button8 = document.getElementById("seven");
var button9 = document.getElementById("eight");
var button10 = document.getElementById("nine");

var startNext = true;

var x1 = 0;
var x2 = 0;
var x3 = 0;
var x4 = 0;
var x5 = 0;
var x6 = 0;
var x7 = 0;
var x8 = 0;
var x9 = 0;
var x10 = 0;
var x11 = 0;
var x12 = 0;

var interval1 = setInterval(function(){
    x1++;
    button1.style.left = x1 + "px";
    if(x1>= window.Width){
        startNext = true;
        return clearInterval(interval1);
        
    }
},10);

var interval2 = setInterval(function(){
    if(startNext){
        x2++;
        button2.style.top = x2 + "px";
        if(x2 >= window.innerWidth){
            return clearInterval(interval2);
        }
    }
},8);

var interval3 = setInterval(function(){
    if(startNext){
        x3++;
        button3.style.top = x3 + "px";
        if(x3 >= window.innerWidth){
            return clearInterval(interval3);
        }
    }
},5);

var interval4 = setInterval(function(){
    if(startNext){
        x4++;
        button4.style.top = x4 + "px";
        if(x4 >= window.innerWidth){
            return clearInterval(interval4);
        }
    }
},37);

var interval5 = setInterval(function(){
    if(startNext){
        x5++;
        button5.style.top = x5 + "px";
        if(x5 >= window.innerWidth){
            return clearInterval(interval5);
        }
    }
},20);

var interval6 = setInterval(function(){
    if(startNext){
        x6++;
        button6.style.left = x6 + "px";
        if(x6 >= window.innerWidth){
            return clearInterval(interval6);
        }
    }
},8.777);

var interval7 = setInterval(function(){
    if(startNext){
        x7++;
        button6.style.top = x7 + "px";
        if(x7 >= window.innerWidth){
            return clearInterval(interval7);
        }
    }
},7);

var interval8 = setInterval(function(){
    if(startNext){
        x8++;
        button7.style.top = x8 + "px";
        if(x8 >= window.innerWidth){
            return clearInterval(interval8);
        }
    }
},13);

var interval9 = setInterval(function(){
    if(startNext){
        x9++;
        button8.style.top = x9 + "px";
        if(x9 >= window.innerWidth){
            return clearInterval(interval9);
        }
    }
},15);

var interval10 = setInterval(function(){
    if(startNext){
        x10++;
        button9.style.top = x10 + "px";
        if(x10 >= window.innerWidth){
            return clearInterval(interval10);
        }
    }
},10);

var interval11 = setInterval(function(){
    if(startNext){
        x11++;
        button10.style.top = x11 + "px";
        if(x11 >= window.innerWidth){
            return clearInterval(interval11);
        }
    }
},10);

var interval11 = setInterval(function(){
    if(startNext){
        x11++;
        button10.style.right = x11 + "px";
        if(x11 >= window.innerWidth){
            return clearInterval(interval11);
        }
    }
},20);

/* var interval12 = setInterval(function(){
    if(startNext){
        x12++;
        button4.style.right = x12 + "px";
        if(x12 >= window.innerWidth){
            return clearInterval(interval12);
        }
    }
},20); */





