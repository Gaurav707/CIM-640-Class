function setup()
{
  // put setup code here
   createCanvas(1000,400);
}

function draw() {
  frameRate(5);


  background("yellow");
  // put drawing code here
if(mouseIsPressed)
{
  fill("grey");
  ellipse(50,70,60,60);
}
else{
fill("red");
  ellipse(50,70,60,60);
}


if(mouseIsPressed)
{
  fill("purple");
  ellipse(150,70,60,60);
}
else {
  fill("red");
  ellipse(150,70,60,60);

}

if(mouseIsPressed)
{
  fill("silver");
  ellipse(50,90,20,20);
}

else{
fill("black");
ellipse(50,90, 20, 20);
}

if(mouseIsPressed)
{
  fill(200);
ellipse(150, 90, 20, 20);
}

else{
  fill(100);
  ellipse(150,90,20,20);
}

ellipse(mouseX, mouseY, 20, 20);




if(mouseIsPressed)
{
  fill("blue");
  arc(100, 150, 100, 75, 0, PI);
}
else {
  fill("violet");
  arc(100, 150, 100, 75, 0, PI);

}

if(mouseIsPressed)
{
  fill("green");
  triangle(75,125,100,75,125,125);
}
else{
  fill("pink");
  triangle(75,125,100,75,125,125);
}

if(mouseIsPressed)
{
  fill("beige");
  arc(50,40,60,30,PI,0);
}
else{
fill("black");
arc(50,40,60,30,PI,0);
}

if(mouseIsPressed)
{
fill("turquoise");
arc(150,40,60,30,PI,0);
}
else{
fill("black")
arc(150,40,60,30,PI,0);
}





}
