// All the paths
var paths = [];
// Are we painting?
var painting = false;
// How long until the next circle
var next = 0;
// Where are we now and where were we?
var current;
var previous;

function preload(){
dog = loadImage("dog.")

}

function setup() {
  createCanvas(1600, 1000);
  current = createVector(0,0);
  previous = createVector(0,0);
};

function draw() {
  background(255);

  // If it's time for a new point
  if (millis() > next && painting) {

    // Grab mouse position
    current.x = mouseX;
    current.y = mouseY;

    // New particle's force is based on mouse movement
    var force = p5.Vector.sub(current, previous);
    force.mult(0.05);

    // Add new particle
    paths[paths.length - 1].add(current, force);

    // Schedule next circle
    next = millis() + random(100);

    // Store mouse values
    previous.x = current.x;
    previous.y = current.y;
  }

  // Draw all paths
  for( var i = 0; i < paths.length; i++) {
    paths[i].update();
    paths[i].display();
  }
}

// Start it up
function mousePressed() {
  next = 0;
  painting = true;
  previous.x = mouseX;
  previous.y = mouseY;
  paths.push(new Path());
}

// Stop
function mouseReleased() {
  painting = false;
}

// A Path is a list of particles
function Path() {
  this.particles = [];
  this.hue = random(100);
}

Path.prototype.add = function(position, force) {
  // Add a new particle with a position, force, and hue
  this.particles.push(new Particle(position, force, this.hue));
}

// Display plath
Path.prototype.update = function() {
  for (var i = 0; i < this.particles.length; i++) {
    this.particles[i].update();
  }
}

// Display plath
Path.prototype.display = function() {

  // Loop through backwards
  for (var i = this.particles.length - 1; i >= 0; i--) {
    // If we shold remove it
    if (this.particles[i].lifespan <= 0) {
      this.particles.splice(i, 1);
    // Otherwise, display it
    } else {
      this.particles[i].display(this.particles[i+1]);
    }
  }

}

// Particles along the path
function Particle(position, force, hue) {
  this.position = createVector(position.x, position.y);
  this.velocity = createVector(force.x, force.y);
  this.drag = 0.95;
  this.lifespan = 255;
}

Particle.prototype.update = function() {
  // Move it
  this.position.add(this.velocity);
  // Slow it down
  this.velocity.mult(this.drag);
  // Fade it out
  this.lifespan--;
}

// Draw particle and connect it with a line
// Draw a line to another
Particle.prototype.display = function(other) {
  stroke(0, this.lifespan);
  fill(0, this.lifespan/2);
  ellipse(this.position.x,this.position.y, 8, 8);
  // If we need to draw a line
  if (other) {
    line(this.position.x, this.position.y, other.position.x, other.position.y);
  }
  //Body & Shade
  noStroke()
  fill(249,150,1)
  ellipse(303,450,300,300)

  fill(249,150,1)
  ellipse(302,250,203,200)

  fill(249,209,110)
  ellipse(300,450,290,300)

  //Baloon
  if(mouseIsPressed){
    fill(255);
  }else {fill(244,122,86)
  ellipse(523,120,138,140)


  }

  fill(255,152,129)
  ellipse(520,120,130,140)

  stroke(126)
  line(520,190,520,350)
  noFill()
  arc(495,350,50,50,0,PI)

  //Arm
  if (keyIsPressed){
    stroke(50);
    fill(160);
    rect(450, 375, 60, 60, 20)
    rect(170, 375, 60, 60, 20)


  }else {
    noStroke()
    fill(249,209,110)
    rect(450, 375, 60, 60, 20)

  }

  fill(249,209,110)
  rect(170, 375, 60, 60, 20)

  // Ears
	fill(249,209,126)
  ellipse(390,180,60,60)

	fill(249,209,126)
  ellipse(210,180,60,60)

  // Ears2
  fill(213,170,71)
  ellipse(390,180,45,45)

	fill(213,170,71)
  ellipse(210,180,45,45)

  // Head
  noStroke()
  fill(249,209,126)
  ellipse(300,250,200,200)

  fill(252,245,230)
  ellipse(300,250,170,185)

  fill(249,209,126)
  rect(250,225,80,100,30)

  fill(249,209,126)
  rect(350,225,80,100,30)

  fill(249,209,126)
  ellipse(325,185,40,40)

  fill(249,209,126)
  ellipse(275,185,40,40)

  fill(249,209,126)
  arc(300,180,100,50,PI,PI+PI)

  fill(249,209,126)
  ellipse(300,185,21,21)

  fill(252,245,230)
  ellipse(300,196,21,21)

  // Cheeks
  fill(249,209,126)
  ellipse(220,270,30,30)

  fill(249,209,126)
  ellipse(380,270,30,30)

  fill(252,245,230)
  ellipse(233,286,22,22)

  fill(252,245,230)
  ellipse(367,286,22,22)

  // Eyes
  fill(255,255,255)
  ellipse(340,230,40,30)
  ellipse(260,230,40,30)

  fill(0,0,0)
  ellipse(347,228,10,10)
  ellipse(267,228,10,10)

  //Nose & Mouth
  fill(0,0,0)
  rect(300, 270, 25, 18, 5)

  noFill()
  stroke(0,0,0)
  arc(325, 270, 50, 50, 0, PI);
  arc(275, 270, 50, 50, 0, PI);

  noStroke()
  fill(245,218,157)
  arc(300, 310, 50, 50, 0, PI);




}
