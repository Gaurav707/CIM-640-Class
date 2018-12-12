var foo = new P5.SpeechRec(); // speech recognition object (will prompt for mic access)
foo.onResult = showResult; // bind callback function to trigger when speech is recognized
foo.start(); // start listening

function setup(){

  createCanvas(400,400);

}


function showResult()
{
  console.log(foo.resultString); // log the result
}

function draw() {


background(255);
}
