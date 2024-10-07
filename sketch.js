//var size = 100;

let circle = {
  x: 400,
  y: 300,
  size: 50,
  color: [255, 0, 0],
};

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  // cercle
  fill(255, 0, 0);
  if (mouseIsPressed != true) {
    ellipse(circle.x, circle.y, circle.size);
  }
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    circle.y -= 10;
  }
  if (keyCode == DOWN_ARROW) {
    circle.y += 10;
  }
  if (keyCode == LEFT_ARROW) {
    circle.x -= 10;
  }
  if (keyCode == RIGHT_ARROW) {
    circle.x += 10;
  }
}

