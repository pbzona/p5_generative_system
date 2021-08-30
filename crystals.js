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

function randomSelectTwo() {
  const r = random(1);
  if (r > 0.5) {
    return true;
  } else {
    return false;
  }
}

function getRandomFromPalette() {
  const r = floor(random(0, PALETTE.length));
  return PALETTE[r];
}