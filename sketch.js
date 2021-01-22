const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world
var ground,hero;

function preload() {
//preload the images here

}

function setup() {
  createCanvas(3000, 800);
  engine=Engine.create()
  world=engine.world;

  ground=new Ground(1000,750,width,20)
  hero=new Hero(200,200)
  monster=new Monster(900,200,100)

  block1=new Block(530,700)
  block2=new Block(530,650)
  block3=new Block(530,600)
  block4=new Block(530,550)
  block5=new Block(530,500)
  block6=new Block(530,450)

  block7=new Block(600,700)
  block8=new Block(600,650)
  block9=new Block(600,600)
  block10=new Block(600,550)
  block11=new Block(600,500)
  block12=new Block(600,450)
  block13=new Block(600,700)
  block14=new Block(600,650)
  block15=new Block(600,600)
  // create sprites here

}

function draw() {
  background(0);
  Engine.update(engine);
  ground.display()
  hero.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();

  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();

  monster.display();
}

function mouseDragged(){
Matter.Body.setPosition(hero.body,{x: mouseX,y: mouseY})
}

