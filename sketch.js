let fullText = " crunches under my weight.";
let currentText = "";
let index = 0;
let typingSpeed = 100;

function setup() {
  noCanvas(); 
  typeText();
}

function typeText() {
  if (index < fullText.length) {
    currentText += fullText.charAt(index);
    document.querySelector('h1').innerHTML = 
      `<span id="dead-grass">Dead Grass</span>${currentText}`;
    index++;
    setTimeout(typeText, typingSpeed);
  }
}

window.onload = function() {
  addNextGroupLink();
};

function addNextGroupLink() {
  const nextGroupContainer = document.getElementById('next-group-container');
  if (nextGroupContainer) {
    const nextGroupLink = document.createElement('a');
    nextGroupLink.href = "https://xiasarchive.github.io/whytheheavyfeelingcallsyou/";
    nextGroupLink.textContent = "Next Group: Why The Heavy Feeling Calls You";
    nextGroupLink.style.fontSize = "0.8rem";
    nextGroupLink.style.color = "#cca323";
    nextGroupLink.style.textDecoration = "none";
    nextGroupLink.style.opacity = "0.7";
    nextGroupLink.onmouseover = () => nextGroupLink.style.opacity = "1";
    nextGroupLink.onmouseout = () => nextGroupLink.style.opacity = "0.7";
    nextGroupContainer.appendChild(nextGroupLink);
  }
}
