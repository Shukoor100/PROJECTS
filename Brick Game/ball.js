function ball(canvasWidth, canvasHeight){
  this.bLoc = createVector(canvasWidth/2, canvasHeight/2);
  this.bSpeed = createVector(3, -2);
  this.bRad = 10;
  
  this.phy = function() {
    if(this.bSpeed.x < 0 && (this.bLoc.x - this.bRad < 0)){this.bSpeed.x *= -1;}
    if(this.bSpeed.x > 0 && (this.bLoc.x + this.bRad > canvasWidth)){this.bSpeed.x *= -1;}
    if(this.bSpeed.y < 0 && (this.bLoc.y - this.bRad < 0)){this.bSpeed.y *= -1;}
  }
  
  this.setSpeed = function(w, h){
    this.bSpeed.set(w, h);
  }
  
  
  this.show = function(){
    fill(200, 200);
    circle(this.bLoc.x, this.bLoc.y, this.bRad);
    
  }
  this.update = function(){
    this.phy();
    this.bLoc.add(this.bSpeed);
  }
}