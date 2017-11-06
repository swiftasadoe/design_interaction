
var counter = 0;
var speed = -6;

//var counterTwo= 0;
var speedTwo = -.2; 

function preload(){
    img = loadImage("clock.jpg");
}

function setup(){
  createCanvas(windowWidth,windowHeight)
}

function draw(){
    background(255);
    image(img,100,100,736,736);
    translate(465,465);
    rotate(radians(counter));
    noStroke();
    fill(100,84,54);
    rectMode(200,200);
    rect(0,0, 5, 300);
    
    translate(0,0);
    rotate(radians(counter));
    noStroke();
    fill(100,84,54);
    rectMode(200,200);
    rect(0,0,10,300);
    
    if(counter >-1440){
        counter-= speed;
        //counter+= speed;
    }
    
    if (counter >-1440) {
        counter-= speedTwo; 
    }
}
