
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var groundObj;
var leftSide;
var rightSide;
var options;

function setup() {
	createCanvas(windowWidth,windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    groundObj=new Ground(300,570,width*2,20);
    leftSide=new Ground(950,500,20,120);
    rightSide=new Ground(1200,500,20,120);

	Engine.run(engine);

	ball=new Ball(200,100,20);
}


function draw() {
  background("black");
  groundObj.display();
  ball.display();
  leftSide.display();
  rightSide.display();
  keyPressed();
}

function keyPressed() {
  if(keyCode === UP_ARROW){
    Body.applyForce(ball.body,ball.body.position,{x:0.01,y:-0.01});
  }
} 