const button = document.querySelector("button");
const img = document.querySelector("img");

const div = document.getElementById("hover")
div.addEventListener("mouseover",hoverYes) // mouseenter mouse exit
// look up js event listeners

button.addEventListener('click',changePic)

function changePic() {
    console.log("e")
    img.src = "DAFOE2.jpeg"
}

function hoverYes() {
    console.log("eee")
    div.innerText = "WHY DID YOU HOVER???????      YOU CANNOT UNDO WHAT YOUVE DONE!!!"
}






