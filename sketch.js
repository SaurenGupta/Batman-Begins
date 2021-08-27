const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var drops = [];

var engine, world;

function preload(){
    
}

function setup(){
   createCanvas(400,610)

   engine = Engine.create();
    world = engine.world;

    umbrella1 = new Umbrella(200,500,80)
   // drop1 = new Drop(50,50)
   for (var i=0; i<100; i++){
      drops.push(new Drop(random(50,370),random(20,400)))
   }
    
    Engine.run(engine)
}

function draw(){
   background("black") 

   umbrella1.display();
   //drop1.display();
   for (var m=0; m<drops.length; m++){
      drops[m].display()
      drops[m].updateyposition()
   }
}   

