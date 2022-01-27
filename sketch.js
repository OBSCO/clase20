
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var ground;
var rock;
var wall;

function setup()
{
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  var ball_options ={
    restitution: 0.95,
    frictionAir: 0.01
  }
  
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  var ground_options = {
    isStatic: true
  }
  
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  wall = Bodies.rectangle(300,200,200,20,ground_options);
  World.add(world,wall);
  
  var rock_options = {
    restitution: 0.48
  }
   rock = Bodies.circle(300,20,10,rock_options);
   World.add(world,rock);

  ellipseMode(RADIUS);
  rectMode(CENTER);
  
}

function draw() {

  background("black");

  Engine.update(engine);
  fill("White");
  ellipse(ball.position.x,ball.position.y,20);
  fill("red");
  rect(ground.position.x,ground.position.y,400,20);
  fill("red");
  rect(wall.position.x,wall.position.y,200,20);
  fill("DarkGreen");
  ellipse(rock.position.x,rock.position.y,10);

}

