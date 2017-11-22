//var circX = 0;
//var circY = 0;
//var speed = 10;
//var speedY = 10;
var beiger = [252,195,207,203,161];
var beigeg = [208,177,171,188,133];
var beigeb = [161,158,132,172,103];

var greenr = [177,164,145,177,113]; 
var greeng = [182,166,149,179,116]; 
var greenb = [149,153,122,167,95]; 

var purpler = [166,160,136,173,106]; 
var purpleg = [144,151,118,166,92];
var purpleb = [164,159,135,173,105];

var eggplantr = [94,130,77,148,60]; 
var eggplantg = [75,123,62,142,48]; 
var eggplantb = [86,127,71,145,55]; 

var peachr = [255,196,209,204,163];
var peachg = [142,150,117,165,91];
var peachb = [114,139,94,155,73];
var index = 0 


var balls= [];

function setup(){
    createCanvas(1000, 1000);
    for(var i = 0 ; i < 400; i++){
        balls[i]= new Ball();
    }
}
function draw(){
    background(10);
    fill(purpler,purpleb,purpleg);
    for(var i = 40 ; i < balls.length; i++){
        balls[i].drawBall();
        balls[i].bounce(20);
        balls[i].moveBall(100);
    }
    
      fill(beiger,beigeb,beigeg);
    for(var i = 100 ; i < balls.length; i++){
        balls[i].drawBall();
        balls[i].bounce(40);
        balls[i].moveBall(random());
    }
    
       fill(greenr,greenb,greeng);
     for(var i = 20 ; i < balls.length; i++){
        balls[i].drawBall();
        balls[i].bounce(random());
        balls[i].moveBall(108);
    }
    
       fill(eggplantr,eggplantb,eggplantg);
     for(var i = 20 ; i < balls.length; i++){
        balls[i].drawBall();
        balls[i].bounce(width,random());
        balls[i].moveBall(75);
    }
    
    
       fill(peachr,peachb,peachg);
     for(var i = 20 ; i < balls.length; i++){
        balls[i].drawBall();
        balls[i].bounce(random(),height);
        balls[i].moveBall(208);
    }
}


function Ball(){
 this.circX = random(-width,height+100);
 this.circY = random(width,-height);
 this.speed = 10;
 this.speedY = 10;

 fill(255);    
 noStroke();
 this.drawBall = function(){
    rect(this.circX, this.circY, 10, 10);};


 this.bounce = function(){
    if(this.circX > width || this.circX < 0){
        this.speed = this.speed * -1;
    };
    if(this.circY > height || this.circY < 0){
        this.speedY = this.speedY * -1;} } ;

 this.moveBall = function(){
    this.circX = this.circX + this.speed;
    this.circY = this.circY + this.speedY;} 
    

} 





//function drawBall(){
//    //draw ball
//    ellipse(circX, circY, 100, 100);
//}

//function bounce(){
//    //bounce ball
//    if(circX > width || circX < 0){
//        speed = speed * -1;
//    }
//    if(circY > height || circY < 0){
//        speedY = speedY * -1;
//    }
//}

//function moveBall(){
//    //move ball
//    circX = circX + speed;
//    circY = circY + speedY;
//}