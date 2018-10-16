function setup() {
  createCanvas(1600,1000);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

function draw() {
  background(255, 100, 50);

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
