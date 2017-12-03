var spectral; 
var flavor = ["Chicken Noodle","Cream of Brocolli","Vegetable", "Black Bean", "Cheddar Cheese" ];
var index = 0;
var balls= []; 
var counter = 0;
var counter2 = 1;
var speed = 32;
var speed2 = 100;
var state = 1
var satisfyFont;

function preload(){
  spectral= loadFont("SpectralSC-Bold.ttf");  
  can= loadImage("plaincan.png");
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
}

function draw () {

  if(state == 1){ 
      
//WELCOME SCREEN
  background(0); 
  fill(255);
  textSize(30);
  text("WELCOME TO THE GALLERY",50,40,1000,50);
  text("What would happen if your favorite artists had p5.js?",50,80,1000,50)
  text("Here is some inferior parodies of what they would possibly make!",50,120,1000,50);
} 
  else if(state == 2){ 

//      STARRY NIGHT
      
   function setup() {
 createCanvas(1000,1000); 
 for(var i = 0 ; i < 400; i++){
 balls[i]= new Ball();
}
}

function draw() {
  background("#031739");

//SWIRLIES
  fill("#1B1E4C");
    for(var i = 40 ; i < balls.length; i++){
        balls[i].drawBall();
        balls[i].bounce(20);
        balls[i].moveBall(100);
    }
    
      fill("#AA9325");
    for(var i = 100 ; i < balls.length; i++){
        balls[i].drawBall();
        balls[i].bounce(40);
        balls[i].moveBall(random());
    }
    
       fill("#4E74AF");
     for(var i = 20 ; i < balls.length; i++){
        balls[i].drawBall();
        balls[i].bounce(random());
        balls[i].moveBall(108);
    }
    
       fill("#282B2B");
     for(var i = 20 ; i < balls.length; i++){
        balls[i].drawBall();
        balls[i].bounce(width,random());
        balls[i].moveBall(75);
    }
    
    
       fill("#E3DE81");
     for(var i = 20 ; i < balls.length; i++){
        balls[i].drawBall();
        balls[i].bounce(random(),height);
        balls[i].moveBall(208);
    }
//MOON    
fill(238,202,8,180);
ellipse(800,200,150,150);
fill(247,230,142,190);
ellipse(780,190,150,150);
fill(238,202,8,180);
ellipse(820,170,150,170);
fill(247,230,142,190);
ellipse(810,180,150,150);
fill(244,159,10,120);
ellipse(800,200,80,80); 
    
}

function Ball(){
 this.circX = random(-width,height+100);
 this.circY = random(width,-height);
 this.speed = 10;
 this.speedY = 10;


 fill(255);    
 noStroke();
 this.drawBall = function(){
push();
translate(400, 400);
rotate(radians(counter));
    rect(this.circX, this.circY, 10, 10);};
pop();  
 
 this.bounce = function(){
     push();
translate(400, 400);
rotate(radians(counter));
    if(this.circX > width || this.circX < 0){
        this.speed = this.speed * -1;
    };
    if(this.circY > height || this.circY < 0){
        this.speedY = this.speedY * -1;} 
 pop(); 
 } ;

 this.moveBall = function(){
    this.circX = this.circX + this.speed;
    this.circY = this.circY + this.speedY;} 
  
    
    counter+= speed;
    counter2-= speed2;
}   
} 
  else if(state == 3){ 
//POLLACK
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
}
    
    else if(state == 4){
        
//    MAGRITTE
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

}
    else if(state == 5){  
//WARHOL
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

 }
    
}
 
function mousePressed() {
if(state < 5){
    state = state +1;
    }else{
    state = 1;            
    }
    }