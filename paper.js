class Paper{
    constructor(x,y,r){
        var option={
            isStatic:false,
            restitution:0.2,
            friction:0.5,
            density:1.2
        };
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r/2,option);
    World.add(world,this.body);
    }
    display(){
push();
translate(this.body.position.x,this.body.position.y);
rectMode(CENTER);
fill(255,0,255);
ellipse(0,0,this.r,this.r);
pop(); 
    }
}