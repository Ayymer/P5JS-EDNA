//var size = 100;

class Circle {
  constructor() {
    this.x = startX;
    this.y = startY;
    this.size = 50;
    this.color = [random(255),random (255),random (255)];
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

  for (let circle of circleList) {
    circle.afficher();
  }
}


function mouseIsPressed() {
    circleList.push(new Circle(mouseX, mouseY));
  }
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
