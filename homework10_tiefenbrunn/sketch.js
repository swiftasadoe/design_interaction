var pal = ["#998E84", "#687158", "#975D15", "#682717", "#30120B"];
var index = 0 


function setup(){
    createCanvas(1000,1000);
    background(255);
    noStroke();
fill(pal[0]);
    rect(100, 100, 100,100);
fill(pal[1]);
    rect(300, 100, 100,100);
fill(pal[2]);
    rect(500, 100, 100,100);
fill(pal[3]);
    rect(700, 100, 100,100);
fill(pal[4]);
    rect(900, 100, 100,100);
  
 

}

function draw() { 


}

function mousePressed(){
    fill(pal[index])
    index = index+1; 
    
    if (index == pal.length) {
        index=0
        fill(index+1)
    }
        
}