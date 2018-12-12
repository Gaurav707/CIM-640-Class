var myRec = new p5.SpeechRec();
myRec.continuous = true;
myRec.interimResults = true;

var x, y;
var dx, dy;

function setup()
{

  createCanvas(1600, 700);
  background(255, 255, 255);
  fill(0, 0, 0, 255);
  x = width/2;
  y = height/2;
  dx = 0;
  dy = 0;


  textSize(20);
  textAlign(CENTER);
  text("draw: start, reverse, wow, move, erase", 20, 20);

  myRec.onResult = parseResult;
  myRec.start();
}

function draw()
{
  rect(x, y, 5, 5);
  x+=dx;
  y+=dy;
  if(x<0) x = width;
  if(y<0) y = length;
  if(x>width) x = 0;
  if(y>height) y = 0;
}


function parseResult()
{

  var mostrecentword = myRec.resultString.split(' ').pop();
  if(mostrecentword.indexOf("left")!==-1) { dx=-1;dy=0; }
  else if(mostrecentword.indexOf("showtime")!==-1) { dx=1;dy=0; }
  else if(mostrecentword.indexOf("start")!==-1) { dx=0;dy=-1; }
  else if(mostrecentword.indexOf("reverse")!==-1) { dx=0;dy=1; }
  else if(mostrecentword.indexOf("erase")!==-1) { background(255); }
  console.log(mostrecentword);
}
