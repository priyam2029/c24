class Pig { 
constructor (x,y )
{ 
this.body = Bodies.rectangle(x,y,40,40)
this.width = 40;
this.height = 40;  


World.add(world, this.body);

} 

  display (){ 
      
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("green");
    rect(0, 0, this.width, this.height);
    pop();

  }
}