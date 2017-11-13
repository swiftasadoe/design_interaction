var counter = 0;
var speed = 2;

function setup(){
    createCanvas(windowWidth, windowHeight);
    
}

function draw(){
    background(255); 
    fill(255);
   
  
    fill(230,150,35,40);
    noStroke();
    bead (200,200,300);            
    fill(100,20,235,40);
    noStroke();
    bead (200,200,100);
    fill(140,220,135,40);
    noStroke();
    bead (200,200,200);
    
    
}
    
function bead(x,y,size){
    ellipse(x*2,y,size,size);
    ellipse(x,y*2,size,size);
    ellipse(x*1.5,y*3,size,size);
    ellipse(x*2.5,y*3,size,size);
    ellipse(x*3,y*2,size,size);
    rectMode(CENTER);
    rect(x*3,y*1,size,size);
    rect(x,y*1,size,size);
    rect(x*.7,y*3,size,size);
    rect(x*3.3,y*3,size,size);



    
    
    
    
}