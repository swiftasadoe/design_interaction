var img1;
var img2; 
var img3;
var img4;
var roar; 
var moo;
var quack;
var elephunk; 
var quicksand;

var img1 = {
 loc: 0,
 x: 50, 
 y: 50, 
 left: 0, 
 right: 0, 
 top: 0, 
 bottom: 0    
}

var img2 = {
 loc: 0,
 x: 50, 
 y: 570, 
 left: 0, 
 right: 0, 
 top: 0, 
 bottom: 0    
}

var img3 = {
 loc: 0,
 x: 600, 
 y: 50, 
 left: 0, 
 right: 0, 
 top: 0, 
 bottom: 0    
}

var img4 = {
 loc: 0,
 x: 600, 
 y: 350, 
 left: 0, 
 right: 0, 
 top: 0, 
 bottom: 0    
}

//var imgX = 200;
//var imgY = 100;
//var imgSize = 400;
//
//var imgLeft;
//var imgTop;
//var imgRight;
//var imgBottom;


function preload(){ 
    roar = loadSound("reference/lionsound.mp3");
    moo = loadSound("reference/cowsound.mp3");
    quack = loadSound("reference/ducksound.mp3");
    elephunk = loadSound("reference/elephantsound.mp3");
    quicksand = loadFont("reference/Quicksand.ttf");
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    textFont(quicksand);
    img1.loc = loadGif("reference/cow.gif");
    img2.loc = loadGif("reference/duck.gif");
    img3.loc = loadGif("reference/elephant.gif");
    img4.loc = loadGif("reference/lion.gif");
    

}

function draw(){
    background(102,153,0);
    
    image(img1.loc, 50,50);
    image(img2.loc, 50,570);
    image(img3.loc, 600,50);
    image(img4.loc, 600,350);
   
    textSize(70);
    fill(255,204,0);
    text("Welcome To The Petting Zoo. Dare To Pet The Animals?", 980, 50,400, 800);


}
 
function mousePressed(){
    img1.top = img1.y; 
    img1.left = img1.x; 
    img1.right = img1.size + img1.x; 
    img1.bottom = img1.size + img1.y; 
    
    img2.top = img2.y; 
    img2.left = img2.x; 
    img2.right = img2.size + img2.x; 
    img2.bottom = img2.size + img2.y;
    
    img3.top = img3.y; 
    img3.left = img3.x; 
    img3.right = img3.size + img3.x; 
    img3.bottom = img3.size + img3.y; 
    
    img4.top = img4.y; 
    img4.left = img4.x; 
    img4.right = img4.size + img4.x; 
    img4.bottom = img4.size + img4.y; 
    
    if(mouseX > img1.left && mouseX < img1.right && mouseY > img1.top && mouseY < img1.bottom){
        moo.play();
    }
        
      
    if(mouseX > img2.left && mouseX < img2.right && mouseY > img2.top && mouseY < img2.bottom){
        quack.play();
    }
        
        
    if(mouseX > img3.left && mouseX < img3.right && mouseY > img3.top && mouseY < img3.bottom){
       elephunk.play();
    }
    
    if(mouseX > img4.left && mouseX < img4.right && mouseY > img4.top && mouseY < img4.bottom){
        roar.play();
    }
    
}