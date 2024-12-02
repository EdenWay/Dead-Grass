let myGif;
let textLines = [
  "Do you feel it?",
  "No one is here anymore.",
  "A silence that swallows everything.",
  "An echo of footsteps that are no longer there.",
  "We’re never meant to be part of the future.",
  "Fading before it even begins.",
  "Like the song of a bird who has come to love its cage.",
  "The bird forgets the sky.",
  "The cage becomes home.",
  "It is warm.",
  "But it is not free.",
  "This is going to hurt you a lot.",
  "And me, not at all.",
  "I am already nothing.",
  "I lay back down in the grass.",
  "The earth doesn’t notice.",
  "I await the rain.",
  "But it never comes."
];

let currentLine = 0;
let displayedText = "";
let charIndex = 0;
let typingSpeed = 4;
let typingSound;
let windSound;
let isTyping = false;
let textColor;
let showBackButton = false;
let finishedText = false;

function preload() {
  myGif = loadImage("1.gif");
  typingSound = loadSound("typing_sound.mp3");
  windSound = loadSound("wind.mp3");
}

function setup() {
  createCanvas(1920, 1080);
  textColor = color(204, 163, 35);
  textFont("Constantia");
  textSize(48);
  textAlign(CENTER, BOTTOM);
  windSound.loop();
}

function draw() {
  background(0);
  image(myGif, 0, 0, width, height);

  if (frameCount % typingSpeed == 0 && charIndex < textLines[currentLine].length) {
    displayedText += textLines[currentLine].charAt(charIndex);
    charIndex++;
    if (!isTyping) {
      typingSound.play();
      isTyping = true;
    }
  }

  if (charIndex >= textLines[currentLine].length && isTyping) {
    typingSound.stop();
    isTyping = false;
    if (currentLine === textLines.length - 1) {
      finishedText = true;
    }
  }

  fill(textColor);
  text(displayedText, width / 2, height - 150);

  if (showBackButton) {
    fill(255);
    textAlign(LEFT, TOP);
    text("BACK", 50, 50);
  }
}

function mousePressed() {
  if (showBackButton && mouseX > 50 && mouseX < 200 && mouseY > 50 && mouseY < 100) {
    noLoop();
  }

  if (charIndex >= textLines[currentLine].length) {
    if (currentLine < textLines.length - 1) {
      currentLine++;
      displayedText = "";
      charIndex = 0;
    } else {
      showBackButton = true;
    }
  }
}