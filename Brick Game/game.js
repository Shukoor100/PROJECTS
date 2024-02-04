let canvasWidth = 400;
let canvasHeight = 400;
let s, b, a;
let score = 0;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  s = new slab(canvasWidth, canvasHeight);
  b = new ball(canvasWidth, canvasHeight);
  a = new bubble(canvasWidth/2, canvasHeight/2, 30);
  textSize(45);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(50);
  

  if(a.popState){
    if(a.cut()){
      
      a = new bubble(random(canvasWidth), random(0, s.pos.y), random(7, 40));
      score ++;
    }
  }
  if(a.pos.dist(b.bLoc) < a.siz){
    a.popState = true;
  }
  
  if(b.bSpeed.y > 0){
    let y = b.bLoc.y + b.bRad;
    if(y > s.pos.y && y < s.pos.y + s.dim.y*2){
      if(b.bLoc.x > s.pos.x && b.bLoc.x < s.pos.x + s.dim.x){
        b.bSpeed.y *= -1;
        let speedVal = map(s.trackSpeed(), -10, 10, -1, 1, true);
        b.bSpeed.x += speedVal;
        console.log(speedVal);
        
      }
    }
  }
  if(b.bLoc.y - b.bRad > s.pos.y + b.bRad){
    fill(255, 0, 0, 100);
    text("RESTART", canvasWidth/2, 80);
    if(mouseIsPressed){
      b = new ball(canvasWidth, canvasHeight);
      score = 0;
    }
  }
  text(score, canvasWidth/2, canvasHeight/2);
  a.show();
  s.trackMouse();
  s.show();
  b.update();
  b.show();
}


