class Circle {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.size = 5;
    this.color = [random(255), random(255), random(255)];
    this.maxSize = random(50, 150);
  }
  affichercercle() {
    fill(this.color);
    ellipse(this.x, this.y, this.size);
  }

  grandircercle() {
    if (this.size< this.maxSize) {
      this.size += 1;
    }
  }

}

class Square {
  constructor(startX, startY) {
    this.x = startX + 5;
    this.y = startY + 5;
    this.size = 2;
    this.color = [random(255), random(255), random(255)];
    this.maxSize = random(50, 150);
  }

  affichercarre() {
    fill(this.color);
    square(this.x, this.y, this.size);
  }

  grandircarre() {
    if (this.size< this.maxSize) {
      this.size += 1;
    }
  }
}

let circleList = [];
let squareList = [];

function setup() {
  createCanvas(735, 880);
}

function draw() {
  background(220);

  for (let circle of circleList) {
    circle.affichercercle();
    circle.grandircercle();
  }

  for (let square of squareList) {
    square.affichercarre();
    square.grandircarre();
  }
}

function mousePressed() {
  circleList.push(new Circle(mouseX, mouseY));
  squareList.push(new Square(mouseX, mouseY));
}
