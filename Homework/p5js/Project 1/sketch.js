var r = 255;
var g = 255;
var b = 255;



var r;
var rd;
var s;
var xm;

function preload(){
  r = loadImage('assets/r.jpg');
  rd = loadImage('assets/rd.jpg');
  s = loadImage('assets/s.jpg');
  xm = loadImage('assets/xm.jpg');
}


function setup() {
  // put setup code here
createCanvas(1600,700);

}

function draw() {
  // put drawing code here
background(r, g, b);

if (mouseIsPressed){
image(rd, 150, 100);

}else {
  image(s, 150, 100);
}



if (keyIsPressed) {
    image(xm, 200, 300);
  } else {
    image(r,250, 350);
  }

}
