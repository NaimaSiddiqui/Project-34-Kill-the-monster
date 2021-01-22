class Block{
    constructor(x,y){
        var option={
            restitution:1,
            friction: 0.3,
            density: 0.01
        }
        this.body=Bodies.rectangle(x,y,50,50);
        World.add(world,this.body);
        this.width=50;
        this.height=50;
    }
    display(){
        var pos=this.body.position;
        push()
        fill("red")
        stroke("white")
        rectMode(CENTER)
        rect(pos.x,pos.y,this.width,this.height);
        pop()
    }


}