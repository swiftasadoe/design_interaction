function setup(){
    
createCanvas(1020,780);    
background(225,60,60);
}

function draw(){
  
g=10
h=2
    fill(0);
     for(var g =0; g< width; g+=100 ){
         for(var h = 0; h< height; h+=100){
         rect(g, h, 30, 30);} 
         
     }
     
    fill(225,2);
     for(var g =14; g< width; g+=100 ){
         for(var h = 0; h< height; h+=10){
         noStroke();
         rect(g, h, 8, 8);} 
         
     }
    
d=5 
t=1 
    
 
    noFill();
     for(var d =50; d< width; d+=100 ){
         for(var t = 0; t< height; t+=100){
         fill(5,51,5,1);
         noStroke();
         rect(d, t, 30, 150);}         
     }
 

    noFill();
     for(var d =0; d< width; d+=100 ){
         for(var t = 0; t< height; t+=100){
         fill(10,25,221,1);
         noStroke();
         rect(d, t, 150, 30);}         
     }
    
      noFill();
     for(var d =0; d< width; d+=100 ){
         for(var t = 65; t< height; t+=100){
         fill(244,217,22);
         noStroke();
         rect(d, t, 300, 3);}         
     }
    


   

}