const CRYSTAL_SIZE = 500;
const SIDES = 6;
let PALETTE = [];

const layers = [];

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
  let picker = random(1);
  if (picker > 0.3) {
    layers.push(new OutlineShape());
  }

  picker = random(1);
  if (picker > 0.2) {
    layers.push(new SimpleLines());
  }

  picker = random(1);
  if (picker > 0.5) {
    layers.push(new Circles());
  }

  picker = random(1);
  if (picker > 0.4) {
    layers.push(new DottedLines());
  }

  s = new SteppedHexagons();
  s.render();

  // layers.forEach(layer => {
  //   layer.render();
  // });
}