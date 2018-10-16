function setup() {
	createCanvas(400, 400);
}

function draw(){
	background(240);
	fill(0, 10);
	stroke(0, 160);

	translate(width/2, height/2);

	for (var i=0; i < 30; i++) {
		push();
		rotate(i / 5.0);
		scale(i / 8.0);
		triangle(0, -100, -10, 100, 10, 100);
		pop();
	}
}
