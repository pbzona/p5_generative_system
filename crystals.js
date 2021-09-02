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
  let somethingWasDrawn = false;

  let picker = random(1);
  let outline = new OutlineShape();
  if (picker > 0.3) {
    outline.render();
    somethingWasDrawn = true;
  }

  picker = random(1);
  let simpleLines = new SimpleLines();
  if (picker > 0.2) {
    simpleLines.render();
    somethingWasDrawn = true;
  }

  picker = random(1);
  let circles = new Circles();
  if (picker > 0.5) {
    circles.render();
    somethingWasDrawn = true;
  }

  if (!somethingWasDrawn) {
    outline.render();
    simpleLines.render();
    cirlces.render();
  }
}