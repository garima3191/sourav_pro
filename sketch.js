const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var rope,fruit,ground;
var fruit_con;
var fruit_con_2;

var bg_img;
var food;
var rabbit;

var button,blower;
var bunny;
var blink,eat,sad;
var mute_btn;

var fr,rope2;

var bk_song;
var cut_sound;
var sad_sound;
var eating_sound;
var air;
var boat,ground,boatImg,bg_Img

function preload(){
  boatImg = loadImage("boat.png");
  bg_Img = loadImage("background.png");
}

function setup() {
  createCanvas(500,700);
 
  frameRate(80);

  

  engine = Engine.create();
  world = engine.world;
  
  

  blower = createImg('blower.png');
  blower.position(10,250);
  blower.size(150,100);
  blower.mouseClicked(airblow);

  
  

  ground = Bodies.rectangle(200,690,600,20,{isStatic:true});


  boat = Bodies.rectangle(100,500,100,100,{restitution:0.9});

  World.add(world,boat);
  World.add(world,ground);

 

 

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  image(bg_Img,0,0,490,690);

  push();
  imageMode(CENTER);
  
  image(boatImg,boat.position.x,boat.position.y,100,100);
 rect(ground.position.x,ground.position.y,600,20)
  Engine.update(engine);
 

  drawSprites();



   
}


function keyPressed()
{
  if(keyCode==LEFT_ARROW)
  {
    airblow();
  }
}



function airblow()
{
  Matter.Body.applyForce(boat,{x:0,y:0},{x:0.01,y:0});

}




