var satisfyFont;
var state= 1 
function preload(){
 chair = loadImage("chair.png") ;
 ducky = loadImage("ducky.png") ;
 hammer = loadImage("hammer.png") ;
 lava = loadImage("lava.png") ;
 mug = loadImage("mug.png") ;
 piggy = loadImage("piggy.png") ;
 pipe = loadImage("pipe.png") ;
 tardis = loadImage("tardis.png") ;
satisfyFont = loadFont("Satisfy-Regular.ttf");
}

function setup(){
    createCanvas(1000,1000);
    background("#FDF6EB");
    textFont(satisfyFont);
    textSize(60);

}



function draw(){
    
   if (state == 1) { 
    fill(("#FDF6EB"));
    rect(0,0,2000,2000);
    fill(0);
  image(pipe,100,100,385,335); 
 text("This is not a pipe", 200, 500);
    
}else if(state == 2){
    fill(("#FDF6EB"));
    rect(0,0,2000,2000);
    fill(0);
    image(chair,100,100,520,541);
    text("This is not a chair", 100, 700);
    
   }else if(state == 3){
        fill(("#FDF6EB"));
    rect(0,0,2000,2000);
    fill(0);
   image(ducky,100,100,385,335); 
    text("This is not a rubber duck", 100, 500);
    
   }else if(state == 4){
        fill(("#FDF6EB"));
    rect(0,0,2000,2000);
    fill(0);
  image(hammer,100,100,385,335); 
    text("This is not a hammer", 100, 500);
    
   }else if(state == 5){
        fill(("#FDF6EB"));
    rect(0,0,2000,2000);
    fill(0);
  image(lava,100,100,138,469); 
    text("This is not a lava lamp", 100, 650);
    
   }else if(state == 6){
        fill(("#FDF6EB"));
    rect(0,0,2000,2000);
    fill(0);
  image(mug,100,100,385,335); 
    text("This is not a mug", 100, 500);
    
   }else if(state == 7){
        fill(("#FDF6EB"));
    rect(0,0,2000,2000);
    fill(0);
  image(piggy,100,100,385,335); 
    text("This is not a piggy bank", 100, 500);
    
   }else if(state == 8){
        fill(("#FDF6EB"));
    rect(0,0,2000,2000);
    fill(0);
    image(tardis,100,100,336,460); 
    text("This is not a tardis", 100, 600);
    } 
   
} 

function mousePressed(){
     
    if(state < 8){
    state = state +1;
    }else{
    state = state;            
    }
       
}
