let song1; 
let isPlaying=false;

function preload(){
   // img = loadImage("");
}

function setup(){
    createCanvas(800,400);
    song1 = loadSound('1.mp3');
    song1.setVolume(0.5);
}

function draw(){
    background(0);
    Image(img,1,1)
}

function mousePressed(){
   if(song1.isPlaying()){
   }  song.stop();
      else{
         song1.play();
      }
}
