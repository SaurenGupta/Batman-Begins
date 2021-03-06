class Umbrella{
    constructor(x,y,r){
        this.r = r;
        var options = {
            isStatic:true
        }
        this.body = Bodies.circle(x, y, this.r,options);
        
        World.add(world, this.body);
        this.image=loadImage("Walking Frame/walking_1.png")
    }

    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill("white");
        //ellipseMode(RADIUS);
        ///ellipse(0,0,this.r,this.r);
        image(this.image, 0,0,this.r*3 , this.r*3)
        pop();
    }
}