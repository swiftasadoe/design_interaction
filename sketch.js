function setup(){  
createCanvas(1000,400);  
background(114,87,38);

    //glasses
    noFill();
    strokeWeight(8);
    rect(66,99,243,214);
    rect(600,99,243,214);
    line(310,214,600,214);
}


function draw(){
    


 if(state == 1){  
//eyes
    fill(2);
    ellipse(190,218,120,120);
    ellipse(720,218,120,120);
    fill(250);
    ellipse(190,230,80,80);
    ellipse(720,230,80,80);  
 }else if(state == 2){
    fill(84,66,211);
    ellipse(190,218,120,120);
    ellipse(720,218,120,120);
}else if (state == 3){ 
    fill(11,26,112);
    ellipse(190,218,120,120);
    ellipse(720,218,120,120);
}else if (state == 4){
    fill(11,112,79);
    ellipse(190,218,120,120);
    ellipse(720,218,120,120);
}
else if (state == 5){
    fill(11,112,23);
    ellipse(190,218,120,120);
    ellipse(720,218,120,120);
}
    
    function mousePressed(){
    if(state < 5){
    state = state +1;
    }else{
    state =1;            
    }
}
}