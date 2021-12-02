const images = [
["assets/airforce.png", "sunday"],
["assets/airjordans.png", "monday"],
["assets/ganniboots.png", "tuesday"],
["assets/silveryeezy.png", "wednesday"],
["assets/stansmiths.png", "thursday"],
["assets/triples.png", "friday"],
["assets/goldengoose.png", "saturday"]
]

let i = 0;
function placeImage() { 
console.log(i);
const nextSrc = images[i][0];
const img = document.createElement("img");
img.setAttribute("src", nextSrc);
document.body.appendChild(img);
const nextText = images[i][1];
var para = document.createElement("P");
  para.innerText = nextText;
  document.body.appendChild(para);
i = i + 1;
if (i >= images.length) {
    i = 0
  }


}
function test() {
    console.log ("hello")
}
let button = document.querySelector(".button");
button.addEventListener("click", placeImage); 







