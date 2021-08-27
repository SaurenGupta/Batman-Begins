class Drop{
    constructor(x,y){
        this.r = 5;
        this.body = Bodies.circle(x, y, this.r);
        
        World.add(world, this.body);
    }

    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        //image(this.image, 0,0,this.r , this.r)
        pop();
    }

    updateyposition(){
        if(this.body.position.y>600){
        Matter.Body.setPosition(this.body,{x:random(50,350),y:random(30,200)})
        }
    }
}