class Projectile {
    constructor(bodyA,pointB){ 
        var options = { 
            bodyA:bodyA,
            pointB:pointB ,
            stiffness:0.04,
            length:10
        }
        this.pointB = pointB;
        this.body = Constraint.create(options);
        World.add(world,this.body);
    }
    release(){ 
        this.body.bodyA = null;
    }
    display(){ 
        if(this.body,bpdyA){ 
            var pointA = this.body.bodyA.position;
            var pontB = this.pointB;
            strokeWeight(1);
            stroke("grey");
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
 }

