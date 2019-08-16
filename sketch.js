let sky = []

window.onresize = setup

function setup() {
  createCanvas(window.innerWidth, window.innerHeight)
  sky = []
  for (let i = 0; i < 500; i++) {
    sky.push(new Star())
  }
}

function draw() {
  background(0)
  translate(width / 2, height / 2)
  for (let i = 0; i < 500; i++) {
    sky[i].update()
    sky[i].draw()
  }
}

class Star {
  constructor() {
    this.x = random(-5000, 5000)
    this.y = random(-5000, 5000)
    this.z = random(500, 2000)
  }
  reset() {
    this.x = random(-5000, 5000)
    this.y = random(-5000, 5000)
    this.z = 2000
  }
  update() {
    this.z -= 10
    if (this.z <= 0) {
      this.reset()
    }
  }
  draw() {
    let offsetX = (100 * this.x) / this.z
    let offsetY = (100 * this.y) / this.z
    let scl = (2000 - this.z) / 2000
    push()
    translate(offsetX, offsetY)
    fill(255)
    ellipse(offsetX, offsetY, 20 * scl, 20 * scl)
    pop()
  }
}
