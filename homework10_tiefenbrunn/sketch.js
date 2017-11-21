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


function setup(){
    createCanvas(1000,1000);
    background(255);
    noStroke();
//fill(beiger[index], beigeg[index],beigeb[index]);
    rect(100, 100, 100,100);
//fill(greenr[index],greeng[index],greenb[index]);
    rect(300, 100, 100,100);
//fill(purpler[index],purpleg[index],purpleb[index]);
    rect(500, 100, 100,100);
//fill(eggplantr[index],eggplantg[index],eggplantb[index]);
    rect(700, 100, 100,100);
//fill(peachr[index],peachg[index],peachb[index]);
    rect(900, 100, 100,100);
//  
 

}

function draw() { 


}

function mousePressed(){
//   fill(beiger[index], beigeg[index],beigeb[index]);
//   fill(greenr[index],greeng[index],greenb[index]);
//   fill(purpler[index],purpleg[index],purpleb[index]);
//   fill(eggplantr[index],eggplantg[index],eggplantb[index]);
//   fill(peachr[index],peachg[index],peachb[index]);
    fill(beiger[index], beigeg[index],beigeb[index]);
    rect(100, 100, 100,100);
fill(greenr[index],greeng[index],greenb[index]);
    rect(300, 100, 100,100);
fill(purpler[index],purpleg[index],purpleb[index]);
    rect(500, 100, 100,100);
fill(eggplantr[index],eggplantg[index],eggplantb[index]);
    rect(700, 100, 100,100);
fill(peachr[index],peachg[index],peachb[index]);
    rect(900, 100, 100,100);
  
 
    index = index+1; 
    
    if (index == greenr.length) {
        index=0
        fill(index+1)
    }

        
}
