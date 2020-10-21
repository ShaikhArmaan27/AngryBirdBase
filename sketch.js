
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var grounds,world,engine;
var box1,box2,box3,box4,box5;
var pig1,pig2 ;
var log1,log2,log3,log4;
var bird

function setup() {
  createCanvas(1200,700);
  engine = Engine.create();
  world = engine.world;
  
  box1 = new Box(800,640,70,70)
  box2 = new Box(1000,640,70,70)
  grounds = new Ground(800,680,1600,20)
  pig1 = new Pig(900,640)
  log1 = new Log(900,600,280,PI/2)
  box3 = new Box(800,550,70,70)
  box4 = new Box(1000,550,70,70)
  pig2 = new Pig(900,550)
  log2 = new Log(900,510,280,PI/2)
  box5 = new Box(900,460,70,70)
  log3 = new Log(815,400,160,PI/7)
  log4 = new Log(960,400,150,-PI/7)
  bird = new Bird(150,150)
}

function draw() {
  background(0);
  Engine.update(engine);
  box1.display()
  box2.display()
  grounds.display()
  pig1.display()
  log1.display()
  box3.display()
  box4.display()
  pig2.display()
  log2.display()
  box5.display()
  log3.display()
  log4.display()
  bird.display()
}
