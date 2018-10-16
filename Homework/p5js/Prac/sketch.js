var cnv;
var stars = [];
var shootingStar;
var starPos=0;
var alien;
var ufo;
var starToggle=false;
var moonToggle=false;
var color1;
var color2;

var colorChange=false;
var colorToggle = false;

var submitButton;
var moonsize;
var g;
function preload(){
  alien = loadImage('images/alien.jpg');
  ufo = loadImage('images/Toy_UFO_icon.png')
}

function setup(){
  cnv = createCanvas(windowWidth, windowHeight);
//frameRate(10);
submitButton = createButton("click me for magic");
submitButton.position(50,200);
submitButton.mousePressed(function(){
  if(colorToggle==false)
  {
    colorChange=true;
    colorToggle=true;
  }
  else if(colorToggle == true) {
    colorChange=false;
    colorToggle=false;
  }

    console.log(colorChange);
});
for (var i = 0; i < 1000; i++) {
    stars.push(new Star());

}
shootingStar = new ShootingStar();
cnv.mouseWheel(changeSize);
moonsize = 200;
g = 100;



}
function draw(){
background(220);
color1 = color(10);
color2 = color(50);

if(colorChange==true)
{
  color1 = color(255,0,15);
  color2 = color(0,20,150);

}
else {
  color1 = color(10);
  color2 = color(50);

}
setGradient(0, 0, windowWidth, windowHeight, color1, color2, "Y");
for (var i = 0; i < 50; i++) {
    stars[i].draw();


}
image(ufo,20,20,80,50);
if(moonToggle==true)
{
  fill(250);
  ellipse(300, 100, moonsize, moonsize);
}

fill(255);
ellipse(this.x, this.y, this.w, this.h);
if(starToggle==true)
{
  fill("orange")
ellipse(starPos,50,starPos,5);
starPos++;
}
else {

}
}
function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  if (axis == "Y") {  // Top to bottom gradient
    for (let i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }
  else if (axis == "X") {
    for (let j = x; j <= x+w; j++) {
      var inter2 = map(j, x, x+w, 0, 1);
      var d = lerpColor(c1, c2, inter2);
      stroke(d);
      line(j, y, j, y+h);
    }
  }
  shootingStar.draw();



  if(mouseX>20 && mouseX <100 && mouseY>20 && mouseY<70)
  {
    image(alien, mouseX, mouseY)
  }



}

function Star() {
   this.x = random(windowWidth);
   this.y = random(windowHeight-200);
   this.w = 2;
this.h = 2;
}

Star.prototype.draw = function() {
   noStroke();
fill(255, 255, 0);
ellipse(this.x, this.y, 2, 2);
this.x += (random(10) - 5);
this.y += (random(10) - 5);
if (this.w == 2) {
    this.w = 3;
    this.h = 3;
} else {
    this.w = 2;
    this.h = 2;
}
}



function ShootingStar() {
  this.x = random(windowWidth-200);
  this.y = random(windowHeight-400);
  this.w = 6;
  this.h = 4;

}
ShootingStar.prototype.draw = function() {
  noStroke();
  fill(255, 255, 0);
  ellipse(this.x, this.y, this.w, this.h);
  if (this.h > 0) {
    this.h -= 0.5;
  }
  this.w += 7;
  this.x += 5;
}

function keyPressed()
{
  if(key==' ')
  {
    starToggle=true;
  }
}

function mousePressed()
{

    if(moonToggle==false)
    {
        moonToggle=true;
    }
    else if(moonToggle==true){
      moonToggle=false;
    }



}
function mouseWheel(){
g = g + 10;

}

function changeSize(event){
  if (event.deltaY > 0) {
    moonsize = moonsize + 10;

  }else {
    moonsize = moonsize - 10;
  }

  }
