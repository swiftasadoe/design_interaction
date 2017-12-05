var state = 1
function setup(){
    createCanvas(1000, 1000);
    background("#FDF6EB");
}

function draw(){
   fill(0);
   noStroke();
   ellipse(mouseX,mouseY,10,10);
    
  if(state == 1){  
  fill("#FCAF31");
  ellipse(mouseX,mouseY,30,30);
  ellipse(mouseX+100,mouseY+100,20,10);
  ellipse(mouseX+90,mouseY+170,30,20);} 
  else if(state == 2){
  fill("#400D00");
  ellipse(mouseX,mouseY,20,20);
  ellipse(mouseX+100,mouseY+100,10,10);
  ellipse(mouseX+200,mouseY+80,5,5);} 
  else if(state == 3){
  fill("#FFC055");
  ellipse(mouseX,mouseY,40,40);
  ellipse(mouseX+100,mouseY+200,2,2);
  ellipse(mouseX+200,mouseY+80,40,20);}
    else if(state == 4){
  fill(255);
  ellipse(mouseX,mouseY,30,30);
  ellipse(mouseX+300,mouseY+300,5,5);
  ellipse(mouseX+100,mouseY+100,5,5);}
    else if(state == 5){
 fill("#43AEBA");
  ellipse(mouseX,mouseY,50,50);
  ellipse(mouseX+130,mouseY+400,10,10);
  ellipse(mouseX+140,mouseY+40,5,5);}
    else if(state == 6){
  fill("#A74126");
  ellipse(mouseX,mouseY,50,50);
  ellipse(mouseX+50,mouseY+50,5,5);
  ellipse(mouseX+100,mouseY+100,5,5);
 ellipse(mouseX+300,mouseY+300,5,5);
  ellipse(mouseX+100,mouseY+100,5,5);}
    else if(state == 7){
 fill("#5B1611");
 ellipse(mouseX,mouseY,60,60);
  ellipse(mouseX+300,mouseY+300,5,5);
  ellipse(mouseX+100,mouseY+100,5,5);} 
    
}
 
function mousePressed() {
if(state < 7){
    state = state +1;
    }else{
    state = 1;            
    }
    }