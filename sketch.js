class Circle {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.size = 50;
    this.color = [random(255), random(255), random(255)];
  }

  afficher() {
    fill(this.color);
    square(this.x, this.y, this.size);
    ellipse(this.x, this.y, this.size);
    
  }
}

let circleList = [];

function setup() {
  createCanvas(735, 880);
}

function draw() {
  background(220);

  for(let circle of circleList) {
    circle.afficher();
  }
}

function mousePressed() {
  circleList.push(new Circle(mouseX, mouseY));
}

// function keyPressed() {
//   if (keyCode == UP_ARROW) {
//     this.y -= 10;
//   }
//   if (keyCode == DOWN_ARROW) {
//     this.y += 10;
//   }
//   if (keyCode == LEFT_ARROW) {
//     this.x -= 10;
//   }
//   if (keyCode == RIGHT_ARROW) {
//     this.x += 10;
//   }
// }
