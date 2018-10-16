var x = 100,
  y = 100,
  angle1 = 0.0,
  segLength = 50;
function preload(){
  xmas = loadImage('assets/xmas.jpg');
  santa = loadImage('assets/santa.jpg');
}


function setup() {
  createCanvas(1600, 700);
  strokeWeight(20.0);
  stroke(255, 200);
}

function draw() {
  background(150);
console.log("mouseX: "+ mouseX + "mouseY: "+ mouseY);
textSize(18);
text("Move over each area to reveal a surprise!", 20,20);


line(width/2, 0, width/2, height)
text("Day", 120,360);
text("Night", 300,360);
  dx = mouseX - x;
  dy = mouseY - y;
  angle1 = atan2(dy, dx);
  x = mouseX - (cos(angle1) * segLength);
  y = mouseY - (sin(angle1) * segLength);

  segment(x, y, angle1);
  ellipse(x, y, 20, 20);
}

function segment(x, y, a) {
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  pop();
}
