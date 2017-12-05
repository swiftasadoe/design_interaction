var spectral; 
var flavor = ["Chicken Noodle","Cream of Brocolli","Vegetable", "Black Bean", "Cheddar Cheese" ];
var index = 0;

function preload(){
  spectral= loadFont("SpectralSC-Bold.ttf");  
  can= loadImage("plaincan.png");
}

function setup() {
    createCanvas(1000,1000);
    background(255);
    textFont(spectral);
    textSize(30);
    fill(255,20,60);
    image(can,100,100, 258,416);
    text("Tomato",150,400);
}

function draw() { 
   
} 

function mousePressed(){
    background(255);
    image(can,100,100, 258,416);
    fill(255,20,60);
    textSize(30);
    text(flavor[index],150,400);
    index = index +1;
    
    if(index == flavor.length){
        index = 0;
    }
    
}

