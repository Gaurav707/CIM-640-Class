function setup()
 {
  // put setup code here
   createCanvas(1000,400);
}

function draw() {

  background("yellow");
  // put drawing code here

fill("red");
  ellipse(50, 70, 60, 60);
ellipse(150, 70, 60, 60);
fill("black");
ellipse(50,90, 20, 20);
ellipse(150, 90, 20, 20);

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
  fill("orange");
  triangle(75,125,100,75,125,125);
}
fill("black");
arc(50,40,60,30,PI,0);

fill("black")
arc(150,40,60,30,PI,0);


}
