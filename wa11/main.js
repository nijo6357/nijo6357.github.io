const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ["../wa11/beans1.jpeg",
                "../wa11/beans2.jpeg",
                "../wa11/beans3.jpeg",
                "../wa11/beans4.jpeg",
                "../wa11/beans5.jpeg"]

/* Declaring the alternative text for each image file */
const altText = {
    "image1": "This is a photo of beans",
    "image2": "This is also a photo of beans",
    "image3": "This is another photo of beans",
    "image4": "This is also another photo of beans",
    "image5": "This is an additional photo of beans"
}
console.log(altText["image4"])





/* Looping through images */

for (let i = 0; i < 5; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', images[i]);
    newImage.setAttribute('alt', altText['image'+(i+1)]);
    thumbBar.appendChild(newImage);
function displayImage() {
    displayedImage.setAttribute('src', images[i]);
    displayedImage.setAttribute('alt', altText['image'+(i+1)]);
}
    newImage.addEventListener("click",displayImage);

}


    

// for(let i = 0; i< images.length; i++) {}

/* Wiring up the Darken/Lighten button */

btn.addEventListener("click", ()=> {
    if (btn.getAttribute("class") == "dark"){
        btn.setAttribute("class", "light");
        btn.textContent = ("Lighten");
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    

    }
    else if (btn.getAttribute("class") == "light"){
        btn.setAttribute("class", "dark");
        btn.textContent = "darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
})
