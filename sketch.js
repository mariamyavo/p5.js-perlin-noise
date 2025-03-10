let cols, rows;
let scale = 40; // Increased scale 
let zOffset = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = floor(width / scale);
  rows = floor(height / scale);
  noFill();
  background(0);
}

function draw() {
  background(0, 20);
  strokeWeight(3); // Increased stroke 

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let xOffset = x * 0.1;
      let yOffset = y * 0.1;
      let noiseVal = noise(xOffset, yOffset, zOffset);

      let r = map(noiseVal, 0, 1, 100, 255);
      let b = map(noiseVal, 0, 1, 100, 255);
      let col = color(r * noiseVal, 50, b);
      stroke(col);

      let x1 = x * scale;
      let y1 = y * scale;
      let x2 = x1 + scale * noise(zOffset + 15) * 2;
      let y2 = y1 + scale * noise(zOffset + 25) * 2;
      let x3 = x1 + scale * noise(zOffset + 35) * 2;
      let y3 = y1 + scale * noise(zOffset + 45) * 2;
      let x4 = x1 + scale * noise(zOffset + 55) * 2;
      let y4 = y1 + scale * noise(zOffset + 65) * 2;

      bezier(x1, y1, x2, y2, x3, y3, x4, y4);
    }
  }

  zOffset += 0.02;
}
