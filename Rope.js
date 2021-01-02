class Rope {
    constructor(body1, pointB){
        var options = {
            bodyA : body1,
            pointB : pointB,
            length : 10,
            stiffness : 0
        }
        this.pointB = pointB
        this.body = Matter.Constraint.create(options);

        World.add(world, this.body);
    }

    display() {
        if(this.body.bodyA){
        var pointA = this.body.bodyA.position;
        var pointB = this.pointB;
        push ();
        strokeWeight(5);
        stroke("brown");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop ();
        }
    }
    attach(body){
		this.body.bodyA=body;
	}

	fly()
	{
		this.body.bodyA=null;
	}
}