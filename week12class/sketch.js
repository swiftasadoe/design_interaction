//var circX = 0;
//var circY = 0;
//var speed = 10;
//var speedY = 10;

var party = {
 circX : 0,
 circY : 0,
 speed : 10,
 speedY : 10,
    
 drawBall:function(){
    ellipse(this.circX, this.circY, 100, 100);} ,


bounce:function(){
    if(this.circX > width || this.circX < 0){
        this.speed = this.speed * -1;
    }
    if(this.circY > height || this.circY < 0){
        this.speedY = this.speedY * -1;} } , 

moveBall:function(){
    this.circX = this.circX + this.speed;
    this.circY = this.circY + this.speedY;} ,
    
 
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    
}

function draw(){
    background(255, 10, 100);
    party.drawBall();
    party.bounce();
    party.moveBall();
    
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