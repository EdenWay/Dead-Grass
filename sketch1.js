let img;
let song; 
let isPlaying=false;

function preload(){
    img = loadImage('assets/Grass.png');
    song = loadSound('assets/1.mp3');
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    
}

function draw(){
    background(0);
    image(img,0,0,width,height);
}

function mousePressed(){
   if(song.isPlaying()){
   }  song.stop();
      else{
         song.play();
      }
}
