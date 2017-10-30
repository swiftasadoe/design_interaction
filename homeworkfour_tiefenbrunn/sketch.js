//
function preload(){
    img = loadImage("maize.png");
    imgTwo = loadImage("carrot.png");
    imgThree = loadImage("pickle.png");
}

var rectX = 100;
var rectY = 100;
var rectSize = 100;
var rectTop = rectY;
var rectBottom = rectY + rectSize;
var rectLeft = rectX;
var rectRight = rectX + rectSize;
var colR;

function setup(){
    createCanvas(windowWidth, windowHeight);
   
}

function draw(){
    background(200);
    
    if(mouseX > rectLeft && mouseX < rectRight && mouseY > rectTop && mouseY < rectBottom){
        colR = 0;
      image(img, 100, 100, 600, 600);
    }else{
        colR = 255; 
         image(imgTwo, 100, 100, 600, 600);
    }
        fill(colR, 10, 100);
        rect(rectX, rectY, rectSize, rectSize);
    
     
}
