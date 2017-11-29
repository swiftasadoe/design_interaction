
function preload(){
 chair = loadImage("chair.png") ;
 ducky = loadImage("ducky.png") ;
 hammer = loadImage("hammer.png") ;
 lamp = loadImage("lamp.png") ;
 lava = loadImage("lava.png") ;
 mug = loadImage("mug.png") ;
 piggy = loadImage("piggy.png") ;
 pipe = loadImage("pipe.png") ;
 pizza = loadImage("pizza.png") ; 
 pumpkin = loadImage("pumpkin.png") ;
 tardis = loadImage("tardis.png") ;
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
    createCanvas(1000,1000);
     background("#FDF6EB");
   
}



function draw(){
    
     image(pipe,400,400,770,671); 
    
//    if(mouseX > rectLeft && mouseX < rectRight && mouseY > rectTop && mouseY < rectBottom){
//        colR = 0;
//      image(pipe,770,671,500,500);
//    }else{
//        colR = 255; 
//         image();
//    }
//        fill(colR, 10, 100);
//        rect(rectX, rectY, rectSize, rectSize);
    
     
}
