class Monster{
    constructor(x,y,r){
        var option={
            density:1
        }
        this.body=Bodies.circle(x,y,r,option);
        World.add(world,this.body);
       this.monsterFire=loadImage("images/Monster-01.png")
       this.monster=loadImage("images/Monster-02.png")
       this.r=r;
    }
    display(){
        var pos=this.body.position;
        push()
        
        imageMode(CENTER)
        image(this.monsterFire,pos.x,pos.y,this.r,this.r);
        pop()
    }
}