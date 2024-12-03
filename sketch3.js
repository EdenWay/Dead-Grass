let video;
let keysPressed = { w: false, a: false, l: false, k: false };

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Load video
  video = createVideo(['02.mp4']);
  video.hide();  // Hide vid
  video.loop();  // vid play
}

function draw() {
  background(0);

  if (keysPressed.w && keysPressed.a && keysPressed.l && keysPressed.k) {
    // Start playing the video when all keys are pressed 
    if (video.time() === 0) {
      video.play(); // Start playing the video when all keys are pressed
    }
    // Display vid
    image(video, 0, 0, width, height); 
  } else {
    // If the keys are not pressed
    textAlign(CENTER, CENTER);
    fill(255);
    textSize(32);
    text('Press W, A, L, K', width / 2, height / 2);
    textSize(14);
    text('Back', width / 30, height / 30);
  }
}

function keyPressed() {
  if (key === 'w' || key === 'W') {
    keysPressed.w = true;
  } else if (key === 'a' || key === 'A') {
    keysPressed.a = true;
  } else if (key === 'l' || key === 'L') {
    keysPressed.l = true;
  } else if (key === 'k' || key === 'K') {
    keysPressed.k = true;
  }
}

function keyReleased() {
  if (key === 'w' || key === 'W') {
    keysPressed.w = false;
  } else if (key === 'a' || key === 'A') {
    keysPressed.a = false;
  } else if (key === 'l' || key === 'L') {
    keysPressed.l = false;
  } else if (key === 'k' || key === 'K') {
    keysPressed.k = false;
  }
}
