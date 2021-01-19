class Paper {
    constructor(x,y,r){
    
     var options={
     isStatic:false,
     restitution:0.3,
     friction:0.5,
     density:1.2       
        };
        this.body=Bodies.circle(x,y,70,options);
        this.r=r;
        this.Image = loadImage("paper.png");
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle 

        push();
        translate(pos.x,pos.y);
        rotate(angle)
        strokeWeight(3);
        stroke("yellow");
        fill("red");
        ImageMode(CENTER);
        Image(this.Image,0,0,this.r,this.r);
        pop();
    }
}