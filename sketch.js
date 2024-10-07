//var size = 100;

class Circle {
  constructor() {
    this.x = startX;
    this.y = startY;
    this.size = 50;
    this.color = [255, 0, 0];
  }

  afficher() {
    fill(this.color);
    ellipse(this.x, this.y, this.size);
  }
}

function setup() {
  createCanvas(735, 880);
}

function draw() {
  background(220);
  // cercle
  fill(255, 0, 0);

  for (let circle of circleList) {
    circle.afficher();
  }

  if (mouseIsPressed == true) {
    circleList.push(new Circle(mouseX, mouseY));
    
}


function keyPressed() {
  if (keyCode == UP_ARROW) {
    this.y -= 10;
  }
  if (keyCode == DOWN_ARROW) {
    this.y += 10;
  }
  if (keyCode == LEFT_ARROW) {
    this.x -= 10;
  }
  if (keyCode == RIGHT_ARROW) {
    this.x += 10;
  }
}
