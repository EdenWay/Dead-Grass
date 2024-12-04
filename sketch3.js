let video;
let keysPressed = { w: false, a: false, l: false, k: false };
let darkness = 0; // Variable to control the darkness level

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Load the video
  video = createVideo(['assets/03.MP4']);
  video.hide();  // Hide vid
  video.loop();  // Make vid loop
}

function draw() {
  background(0);

  // Check if all keys are pressed
  if (keysPressed.w && keysPressed.a && keysPressed.l && keysPressed.k) {
    // Start playing the video when all keys are pressed
    if (video.time() === 0) {
      video.play(); // Start playing the video when all keys are pressed
    }
    // Display the vid
    image(video, 0, 0, width, height);
  } else {
    // If the keys are not pressed
    textAlign(CENTER, CENTER);
    fill(255);
    textSize(32);
    text('Press W, A, L, K to start', width / 2, height / 2);
  
  }

  // Gradually dark
  darkness = lerp(darkness, 255, 0.002); // Slowly increase the darkness (lerp to 255)

  
  fill(0, darkness);
  noStroke();
  rect(0, 0, width, height);
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
