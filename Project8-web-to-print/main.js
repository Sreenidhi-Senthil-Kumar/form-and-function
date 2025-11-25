
let backgroundInput = document.getElementById("bg-color");
let fontColorInput = document.getElementById("fg-color");
let fontInput = document.getElementById("font");
let fontSizeInput = document.getElementById("font-size");
let fontStretchInput = document.getElementById("font-stretch");
let imageInput = document.getElementById("image");
let textInput = document.getElementById("text");
let button = document.getElementById("print");
let imagePathInput = document.getElementById("img-path");
let posterImg = document.getElementById("poster-path");
let imgSizeInput = document.getElementById("img-size");


let poster = document.getElementById("poster");
let posterText = document.getElementById("poster-text");
let posterImage = document.getElementById("poster-image");
let posterPath = document.getElementById("poster-path");


backgroundInput.addEventListener("input", function(){
    let bgcolor = this.value; 
    poster.style.backgroundColor = bgcolor; 
})

imagePathInput.addEventListener("input", function(){
    let value = this.value; 
    posterPath.style.fill = value; 
})

imgSizeInput.addEventListener("input", function(){
    let size = this.value; 
    posterImage.style.width = size + "px"; 
})





fontColorInput.addEventListener("input", function(){
    let fgcolor = this.value; 
    posterText.style.color = fgcolor; 
})

fontInput.addEventListener("change", function(){
    let font = this.value; 
    posterText.style.fontFamily = font; 
})

fontSizeInput.addEventListener("change", function(){
    let size = this.value; 
    posterText.style.fontSize = size + "px"; 
})

fontStretchInput.addEventListener("change", function(){
    let stretchFactor = this.value; 
    console.log(stretchFactor)
    posterText.style.transform = "scaleX(" + stretchFactor + ")"; 
    // posterImage.style.width = this.value;
})

textInput.addEventListener("change", function(){
    let text = this.value; 
    posterText.innerHTML = text; 
})

button.addEventListener("click", function(){
    window.print(); 
})




