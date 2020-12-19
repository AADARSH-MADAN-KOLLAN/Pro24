class Paper {
    constructor(x, y, r) {
      var options = {
          isStatic:false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.radius = r;
      this.x = x;
      this.y = y;
      this.body = Bodies.circle(x, y, r, options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      fill("white");
      ellipseMode(CENTER)
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  };
  
