var img1;
var img2; 
var img3;
var img4;
var roar; 
var moo;
var quack;
var elephunk; 
var quicksand;
var yourcanvas;

var img1 = {
 loc: 0,
 x: 50, 
 y: 50, 
 left: 0, 
 right: 0, 
 width: 500, 
 height: 503,
 top: 0, 
 bottom: 0    
}

var img2 = {
 loc: 0,
 x: 50, 
 y: 570, 
 left: 0, 
 right: 0,
 width:374,
 height:204,
 top: 0, 
 bottom: 0    
}

var img3 = {
 loc: 0,
 x: 600, 
 y: 50, 
 left: 0, 
 right: 0,
 width:500,
 height:261,
 top: 0, 
 bottom: 0    
}

var img4 = {
 loc: 0,
 x: 600, 
 y: 350, 
 left: 0, 
 right: 0,
 width:500,
 height:345,
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
    yourcanvas = createCanvas(windowWidth,windowHeight);
    canvas.postition(0,0);
    textFont(quicksand);
    img1.loc = loadGif("reference/cow.gif");
    img2.loc = loadGif("reference/duck.gif");
    img3.loc = loadGif("reference/elephant.gif");
    img4.loc = loadGif("reference/lion.gif");
    

}

function draw(){
    background(102,153,0);
    
    image(img1.loc, img1.x, img1.y);
    image(img2.loc, img2.x, img2.y);
    image(img3.loc, img3.x, img3.y);
    image(img4.loc, img4.x ,img4.y);
   
    textSize(70);
    fill(255,204,0);
    text("Welcome To The Petting Zoo. Dare To Pet The Animals?", 980, 50,400, 800);


}
 
function mousePressed(){
    img1.top = img1.y; 
    img1.left = img1.x; 
    img1.right = img1.width + img1.x; 
    img1.bottom = img1.height + img1.y; 
    
    img2.top = img2.y; 
    img2.left = img2.x; 
    img2.right = img2.width + img2.x; 
    img2.bottom = img2.height + img2.y;
    
    img3.top = img3.y; 
    img3.left = img3.x; 
    img3.right = img3.width + img3.x; 
    img3.bottom = img3.height + img3.y; 
    
    img4.top = img4.y; 
    img4.left = img4.x; 
    img4.right = img4.width + img4.x; 
    img4.bottom = img4.height + img4.y; 
    
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
