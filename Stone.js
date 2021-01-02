class Stone {
    constructor(x, y, radius) {
      
      var options = {
        isStatic: false,
        restitution: 0,
        friction :1,
      density:1.2
    };
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
     // this.height = height;
      this.image = loadImage('sprites/stone.png');
      World.add(world, this.body);

    }

    display(){
        var pos = this.body.position;
        push()
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.radius, this.radius);
        pop()
    }

  };
