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
  testLines();
}

function testLines() {
  const r1 = random(1);
  let numShapes;
  if (r1 > 0.5) {
    numShapes = SIDES * 2;
  } else {
    numShapes = SIDES;
  }

  const r2 = floor(random(0, PALETTE.length));
  const strokeColor = PALETTE[r2];

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