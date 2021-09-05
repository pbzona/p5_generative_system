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
  layerConstructors.forEach(layerCon => {
    let picker = random(1);
    if (picker > layerCon.weight) {
      layers.push(layerCon.init())
    }
  })

  layers.forEach(layer => {
    layer.render();
  });
}