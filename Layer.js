class Layer {
  constructor() {
    this.sides = SIDES;
    this.numShapes = this.sides;
    this.angle = 360 / this.numShapes;
    this.stepsOut = 8;
    this.singleStep = (CRYSTAL_SIZE / 2) / this.stepsOut;
    this.thinStroke = 1;
    this.thickStroke = 3;
    this.strokeColor = getRandomFromPalette();
  }
}

class Circles extends Layer {
  constructor() {
    super();
    this.shapeSize = random(0.82, 0.94) * (CRYSTAL_SIZE / 2);
    this.position = (CRYSTAL_SIZE / 2) - (this.shapeSize / 2);
  }

  render() {
    stroke(this.strokeColor);
    strokeWeight(1);
    noFill();

    push();
      translate(width/2, height/2);
      for (let i = 0; i < this.numShapes; i++) {
        ellipse(this.position, 0, this.shapeSize, this.shapeSize);
        rotate(this.angle);
      }
    pop();
  }
}

class SimpleLines extends Layer {
  constructor() {
    super();
    this.numShapes = randomSelectTwo() ? this.sides : this.sides * 2;
    this.angle = 360 / this.numShapes;

    this.numSteps = randomSelectTwo() ? this.stepsOut : int(this.stepsOut * 1.25);
    this.step = (CRYSTAL_SIZE / 2) / this.numSteps;
    this.weight = randomSelectTwo() ? this.thinStroke : this.thickStroke;
    this.start = floor(random(0, this.numSteps));
    this.stop = floor(random(this.start + 1, this.numSteps + 1));
  }

  render() {
    noFill();
    stroke(this.strokeColor);
    strokeWeight(this.weight);
    push();
      translate(width/2, height/2);
      for (let i = 0; i < this.numShapes; i++) {
        line(this.start * this.step, 0, this.stop * this.step, 0);
        rotate(this.angle);
      }
    pop();
  }
}

class OutlineShape extends Layer {
  constructor() {
    super();
    this.weight = randomSelectTwo() ? this.thinStroke : this.thickStroke;
  }

  render() {
    stroke(this.strokeColor);
    strokeWeight(this.weight);

    push();
      translate(width/2, height/2);
      if (randomSelectTwo()) {
        ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE);
      } else {
        hexagon(0, 0, CRYSTAL_SIZE / 2);
      }
    pop();
  }
}