let test;
let gravity;
let S_W, S_H;

function setup() {
  // put setup code here  
  S_W = 800;
  S_H = 800;
  test = new Particle(100);
  gui = new gui();
  createCanvas(S_W, S_H);
  gravity = createVector(0, 5);
}

function draw() {
  print("hello");
  // put drawing code here
  background(40);
  test.go();
  gui.drawSlider(createVector(100, 200), createVector(600, 200), 10);
}

////////////////////////////////
class Particle{
  constructor(radius){
    this.radius = radius;
    this.location = createVector(S_W/2, S_H/2);  
  }

  go(){
    noStroke();
    fill(255);
    circle(this.location.x, this.location.y, this.radius);
    this.location.add(createVector(0.9, 0));
    this.location.add(gravity);
    //if(this.radius < 0) radius
  }
}

class gui{
  constructor(){
  }

  drawLine(startpos, endpos){
    fill(255);
    stroke(255);
    line(startpos.x, startpos.y, endpos.x, endpos.y);
  }

  drawSlider(startpos, endpos, ssize){

    stroke(10);
    strokeWeight(2);
    line(startpos.x, startpos.y, endpos.x, endpos.y);
    fill(255);
    this.pos = createVector(startpos.x + (endpos.x - startpos.x)/2, startpos.y + (endpos.y - startpos.y)/2);
    //circle(this.pos.x, this.pos.y, 100);
    rect(this.pos.x - ssize/2, this.pos.y - ssize/2, ssize, ssize);
  }
}

