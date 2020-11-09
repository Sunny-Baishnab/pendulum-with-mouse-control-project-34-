class Bob {
    constructor(x,y){
        var options={
            isStatic:false,
            density:1,
            restitution:1
        }
        this.body=Bodies.circle(x,y,40,options);
        this.radius=40;
        World.add(world,this.body);
    }
    display(){
        //var pos=this.body.position;
        push();
        translate(this.body.position.x,this.body.position.y);
        ellipseMode(RADIUS);
        fill("purple");
        ellipse(0,0,40,40);
        pop();
        
    }
}