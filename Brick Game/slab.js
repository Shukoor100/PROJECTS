function slab(canvasWidth, canvasHeight) {
  this.dim = createVector(80, 10);
  this.pos = createVector(canvasWidth/2-(this.dim.x)/2, canvasHeight-canvasHeight/5);
  this.pastArr = [];
  this.pastArr.length = 10;
  this.arrLen = 10;
  this.curLoc = -1;
  this.col = 0;
  
  this.show = function(){
    fill(200, 200-this.col, 200-this.col);
    rect(this.pos.x, this.pos.y, this.dim.x, this.dim.y);
    
  }
  
  this.nextPos = function(){
    if(this.curLoc>this.arrLen){
      this.curLoc = 0;
    }else{
      this.curLoc ++;
    }
  }
  
  this.trackMouse = function(){
    if(mouseX<this.dim.x/2){
      this.pos.x = 0;
    }else if(mouseX>canvasWidth-this.dim.x/2){
      this.pos.x = canvasWidth-this.dim.x;
    }else{
      this.pos.x = mouseX-(this.dim.x)/2;
    }
    this.nextPos();
    this.pastArr[this.curLoc] = this.pos.x;
    this.col = map(abs(float(this.trackSpeed())), 0, 10, 0, 200, true);
  }
  
  this.trackSpeed = function(){
    let loc = this.curLoc;
    if(loc > 9){
      return (this.pastArr[10] - this.pastArr[0])/this.arrLen;
    }else{
      let val = (this.pastArr[loc] - this.pastArr[loc+1])/this.arrLen;
      if(isNaN(val)){return 0;}
      else { return val; }
    }
  }
  
}