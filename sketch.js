const Engine= Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, box20;
var ball, ground;

function setup() {
  createCanvas(1500,700);
  engine= Engine.create();
  world= engine.world;
  ground=new Ground(700,700,3000,30);
  box1=new Box (1400,680,50,50);
  box2=new Box (1400,660,50,50);
  box3=new Box (1400,680,50,50);
  box4=new Box (1400,680,50,50);
  box5=new Box (1400,680,50,50);
  box6=new Box (1400,680,50,50);
  box7=new Box (1380,680,50,50);
  box8=new Box (1380,660,50,50);
  box9=new Box (1380,680,50,50);
  box10=new Box (1380,680,50,50);
  box11=new Box (1380,680,50,50);
  box12=new Box (1380,680,50,50);
  
}

function draw() {
  background(180);  
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
}