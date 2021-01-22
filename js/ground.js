class Ground{
    constructor(x,y,width,height){
        this.body=Bodies.rectangle(x,y,width,height,{isStatic:true});
        World.add(world,this.body);
        this.width=width;
        this.height=height;
        this.image=loadImage("images/GamingBackground.png")
    }
    display(){
        var pos=this.body.position;
        push()
        fill("white")
        imageMode(CENTER)
        image(this.image,pos.x,pos.y);
        pop()
    }
}