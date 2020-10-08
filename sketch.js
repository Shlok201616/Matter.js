const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object, ground_option,ball_options;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ball_options={
    restitution:1.2
  }
  ball=Bodies.circle(200,50,20,ball_options);
  ground_options   = {
    isStatic : true
  }

  ground = Bodies.rectangle(200,390,400,20, ground_options );
  World.add(world, ground);
  World.add(world,ball);
  console.log( ground.position.x);
  console.log( ground.position.y);
}

function draw() {
  background(0);  
 rectMode(CENTER);
ellipseMode(RADIUS);
 Engine.update(engine);
  rect( ground.position.x, ground.position.y,400,20);
  ellipse(ball.position.x,ball.position.y,20,20)
}