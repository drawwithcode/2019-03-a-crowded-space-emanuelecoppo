//ARRAY
var array = [];

function preload() {
  freight = loadFont("freight.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  arrayLength = 20 + Math.round(random(0,10));
  s = 1;
  d = 85;

  //images
  r1 = loadImage("r1.png");
  r2 = loadImage("r2.png");
  r3 = loadImage("r3.png");
  r4 = loadImage("r4.png");
  r5 = loadImage("r5.png");
  r6 = loadImage("r6.png");
  imageMode(CENTER);
  angleMode(DEGREES);

  //CREATE OBJECTS
  for (var i = 0; i <= arrayLength; i++) {
    var newObj = new obj();
    newObj.img = loadImage("r" + Math.round(random(1, 5)) + ".png");
    newObj.x = random(d, width-d);
    newObj.y = random(d, height-d);
    newObj.dim = d;
    newObj.speed = random (10, 20);
    array.push(newObj); //add to array
  }
}

//OBJECT
function obj(_img, _x, _y, _dim, _speed) {

  //object properties
  this.img = _img
  this.x = _x;
  this.y = _y;
  this.dim = _dim;
  this.speed = _speed;
  var yDir = random(-.5, .5);
  var xDir = random(-.5, .5);

  //display method
  this.display = function() {
    image(this.img, this.x, this.y, this.dim, this.dim);
  }

  //move method
  this.move = function() {
    this.x += this.speed * xDir;
    this.y += this.speed * yDir;
    if (this.y >= height-d/2 || this.y <= d/2) {
      yDir = -yDir;
    }
    if (this.x >= width-d/2 || this.x <= d/2) {
      xDir = -xDir;
    }
  }

  //click method
  this.clicked = function() {
  if (dist(this.x, this.y, mouseX, mouseY) < d-10) {
      this.img = r6;
    }
  }
}

function draw() {
  background("#e9ebee");

  //APPLY METHODS TO EACH OBJECT
  for (var j = 0; j <= arrayLength; j++) {
    array[j].display();
    array[j].move();
  }

  //TEXT
  rectMode(CENTER);
  translate(width/2, height);
  noStroke();
  fill("#ccc");
  rect(0, 0, 420, 185, 30);
  image(r6,  160, -45, 45, 45);
  image(r6,  -160, -45, 45, 45);
  fill(120);
  textFont(freight);
  textAlign(CENTER);
  textSize(30);
  text("Only grrr reactions.", 0, -50);
  textSize(20);
  text("Click to make them angry.", 0, -20);
}

function mouseClicked() {
  for (var j = 0; j <= arrayLength; j++) {
    array[j].clicked();
  }
}

//RESIZE
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
