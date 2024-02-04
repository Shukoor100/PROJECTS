function bubble(x, y, s){
  this.pos = createVector(x, y);
  this.siz = s;
  this.offset = 0;
  this.bubbleCutFrames = 20;
  this.opac = 200;
  this.popState = false;
  
  this.cut = function() {
    if(this.offset > 2){
      this.offset = 0;
      if(this.bubbleCutFrames > 0){
        this.bubbleCutFrames --;
        this.siz ++;
        this.opac -= 10;
        return false;
      }
      else{
        this.popState = false;
        return true;
      }
    }

  }
  
  this.show = function() {
    fill(50, 50, 50, 0);
    stroke(200, 200, 200, this.opac);
    circle(this.pos.x, this.pos.y, this.siz);
    strokeWeight(2);
    this.offset ++;
  }
}