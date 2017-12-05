
var index = 0 
var balls= []; 
var counter = 0;
var counter2 = 1;
var speed = 32;
var speed2 = 100;


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