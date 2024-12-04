let song1; 
let isPlaying=false;

function preload(){
    img = loadImage('assets/Grass.png');
    song1 = loadSound('assets/1.mp3');
}

function setup(){
    createCanvas(800,400);
    song1.setVolume(0.5);
}

function draw(){
    background(0);
    image(img,0,0,width,height);
}

function mousePressed(){
   if(song1.isPlaying()){
   }  song.stop();
      else{
         song1.play();
      }
}
