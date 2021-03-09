const Engine = Matter.Engine; 
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint 
var engine;
var world;
var bgImg;
var superHeroImg;
var ground,hero,fly;
var block1,block2,block3,block4;

function preload() {
//preload the images here
bgImg = loadImage("images/GamingBackground.png");
superHeroImg = loadImage("images/Superhero-01.png");


}

function setup() {
  createCanvas(3000, 800);
  // create sprites here

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(1500,600,3000,20);

  hero = new Hero(50,50,300);

  fly = new Fly(hero.body,{x:50,y:50})

  block1 = new Block(1000,500,50,100);

  block2 = new Block(1000,200,50,100);

  block3 = new Block(1000,300,50,100);

  block4 = new Block(1000,400,50,100);





  





}

function draw() {
  background("white");
  image(bgImg,width/2,height/2,width,height);

  Engine.update(engine);

  ground.display();
  hero.display();
  fly.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();


}

function mouseDragged()
{
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})

}

