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
  outlineShape();
  circles();
  simpleLines();
}

function circles() {
  const numShapes = SIDES;
  const angle = 360 / numShapes;
  const shapeSize = 0.93 * (CRYSTAL_SIZE / 2);
  const position = (CRYSTAL_SIZE / 2) - (shapeSize / 2);
  const strokeColor = getRandomFromPalette();
  
  stroke(strokeColor);
  strokeWeight(1);
  noFill();

  push();
    translate(width/2, height/2);
    for (let i = 0; i < numShapes; i++) {
      ellipse(position, 0, shapeSize, shapeSize);
      rotate(angle);
    }
  pop();
}

function simpleLines() {
  const stepsOut = 8;
  const numSteps = randomSelectTwo() ? stepsOut : int(stepsOut * 1.25);
  const step = (CRYSTAL_SIZE / 2) / numSteps;
  const start = floor(random(0, numSteps));
  const stop = floor(random(start + 1, numSteps + 1));

  const numShapes = randomSelectTwo() ? SIDES : SIDES * 2;
  const angle = 360 / numShapes;
  
  const strokeColor = getRandomFromPalette();
  const weight = randomSelectTwo() ? 1 : 3;

  noFill();
  stroke(strokeColor);
  strokeWeight(weight);
  push();
    translate(width/2, height/2);
    for (let i = 0; i < numShapes; i++) {
      line(start * step, 0, stop * step, 0);
      rotate(angle);
    }
  pop();
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