class Hero{
    constructor(x,y){
        var option={
            density:1
        }
        this.body=Bodies.circle(x,y,20,option);
        World.add(world,this.body);
       this.image1=loadImage("images/Superhero-01.png")
       this.image2=loadImage("images/Superhero-02.png")
    }
    display(){
        var pos=this.body.position;
        push()
        
        imageMode(CENTER)
        image(this.image1,pos.x,pos.y,600,200);
        pop()
    }
}