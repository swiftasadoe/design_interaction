var rectX = 200;
var rectY = 200;
var rectSize = 500;
var rectTop = rectY;
var rectBottom = rectY + rectSize;
var rectLeft = rectX;
var rectRight = rectX + rectSize;
var colR;
var getFunky = false; 
//var quicksand;
//
//function preload () {
//    quicksand = loadFont("Quicksand.ttf");
//    
//}

function setup() {
    createCanvas(windowWidth, windowHeight);
//    textFont(quicksand);
}

function draw() {
    noStroke();
    fill(colR,100,20);
    fill(150,75,240);
    rect(190,120,520,80);
    rect(430,200,20,rectSize);
    noStroke();
    fill(colR, 100, 60);
    rect(rectX,rectY,rectSize,rectSize);

     if(mouseX > rectLeft && mouseX < rectRight && mouseY > rectTop && mouseY < rectBottom){
         fill(mouseX,mouseY,30);
         textSize(50);
         text("Wanna see what's inside?", mouseX,mouseY, 200,400);    
       }else{
           fill(colR,mouseX,mouseY);
            textSize(50);
           text("surprise!", mouseX, mouseY,100,100);
       } 

    
    
}

function mousePressed(){
        if(mouseX > rectLeft && mouseX < rectRight && mouseY > rectTop && mouseY < rectBottom && getFunky==false) 
//            IF all these things happen THEN
            {
           colR = 50; 
//            this is the value that changes 
         getFunky = !getFunky;     
//            switches values so you can go back and forth, not just one click  
         background(230,100,200);  

         fill(0);
         textSize(120);
         text("PARTY WHOO",700,300, 500, 500);
       }else if(mouseX > rectLeft && mouseX < rectRight && mouseY > rectTop && mouseY < rectBottom && getFunky==true){
           colR = 220;
           getFunky = !getFunky;
           background(60,170,200); 
           fill(0);
         textSize(120);
           text("PARTY YEAH",700,300,500,500);
           
       } 
//THIS WILL ONLY WORK WITH TWO BECAUSE WE USE TRUE/FALSE/BOOLEAN
}
