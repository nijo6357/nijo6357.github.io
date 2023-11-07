console.log("e");

const x = 2;
const y = 2;

if (x === y) {
    console.log("success");

}
else {
    console.log("fail");

}

const btn = document.querySelector("button");

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

document.addEventListener("DOMContentLoaded", () => {
    canvas.width = document.
    documentElement.clientWidth;
    canvas.height = document.
    documentElement.clientHeight;
});

function random(number){
    return Math.floor(Math.random () * number);
}

function draw() {
    //console.log("test")
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for (let i = 0; i<1000; i++) {
        ctx.beginPath();
        let red = random(255);
        let green = random(255);
        let blue = random(255);
        let color = "rgba("+red+","+green+","+blue+",0.5)";
        
        ctx.fillStyle = color;
        ctx.arc(
            random(canvas.width), random(canvas.height), random(30),0,2 * Math.PI,

        );
        ctx.fill();

    }

}

btn.addEventListener("click", draw);

