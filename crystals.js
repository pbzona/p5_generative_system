const CRYSTAL_SIZE = 500;
const SIDES = 6;
let PALETTE = [];

function setup() {
  PALETTE = [
    color(255, 52, 154), // pink
    color(4, 0 , 152) // blue
  ]

  createCanvas(530, 530);
  rectMode(CENTER);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  // testLines();
  outlineShape();
}

function outlineShape() {
  const strokeColor = getRandomFromPalette();
  const weight = randomSelectTwo() ? 1 : 3;
  
  stroke(strokeColor);
  strokeWeight(weight);

  push();
    translate(width/2, height/2);
    if (randomSelectTwo()) {
      ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE);
    } else {
      hexagon(0, 0, CRYSTAL_SIZE / 2);
    }
  pop();
}

function testLines() {
  let numShapes = randomSelectTwo() ? SIDES : SIDES * 2;
  let strokeColor = getRandomFromPalette();

  noFill();

  push();
    translate(width/2, height/2);
    stroke(PALETTE[0]);
    ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE);

    for (let i = 0; i < numShapes; i++) {
      const angle = 360 / numShapes;

      stroke(strokeColor);
      line(0, 0, 0, CRYSTAL_SIZE / 2);
      rotate(angle);
    }
  pop();
}
