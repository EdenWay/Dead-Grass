let fullText = " crunches under my weight.";
let currentText = "";
let index = 0;
let typingSpeed = 100; 
myImg1= createImg("assets/1.png");
myImg2= createImg("assets/2.png");
myImg3= createImg("assets/3.png");

function setup() {
  noCanvas(); 
  typeText();
}

function typeText() {
  if (index < fullText.length) {
    currentText += fullText.charAt(index);
    document.querySelector('h1').innerHTML = `
      <span id="dead-grass">Dead Grass</span>${currentText}
    `;
    index++;
    setTimeout(typeText, typingSpeed);
  }
}
