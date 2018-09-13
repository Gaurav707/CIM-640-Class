function setup() {
  // put setup code here
   createCanvas(400,400);
  background(0);
  background(0,0,0);
  background("orange");
  background("333333");


  var facePosx=120
  var facePosy=120

function draw() {
  // put drawing code here
  stroke('black');
  strokeweight(0)
  ellipse(facePosx,facePosy,eyeSize,eyeSize);
  ellipse(180,120,eyeSize,eyeSize);
  rect(facePosX,facePosy,320,180,20);

  fill('orange')

  line(120,320,180,20);

  stroke ('red') ;
  strokeweight(5)
  point (width/2, height/2);

  line(facePosx,330,facePosx + 180,330);




  function mousePressed(){
    charColor = "blue";
