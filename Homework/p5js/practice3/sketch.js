var a;
var b;
var c;
var d;
var e;


function setup() {
  // put setup code here
   createCanvas(1600,700);
a = 200;
b = 100;
c = 300;
d = random(1, 50);
e = random(1, 150);

}



function draw() {
  // put drawing code here
background(b, a, 230);

stroke("black");
fill("yellow");
  rect(200, 250, a, b);
fill("purple");
ellipse(c, 300, 20, 50);

for (var i = 0; i < 70; i++);
{
  var posE = random(1, 2000);
  var posC = random(1, 2300);
  arc(posC, posE, 222, 333, PI, i++);
for (var k = 20; k >= 5; k--);{
  var posR = random(2, 500);
  var posJ = random(3, 400);
  ellipse(posR, posJ, 59, 79);
}
}

if (mouseIsPressed) {
  fill("violet");
  stroke("orange");
  for (var xx = 100; xx >= 25; xx--);
  { var posV = random(3, 150);
    var posW = random(5, 400);
    fill("black");
    rect(posV, posW, 200, 350);
}
}else {

}
}
