var carMov,wallFix;
var speed,weight;
var deformation;

function setup() {
  createCanvas(800,400);
  wallFix=createSprite(700, 200, 10, 50);
  carMov=createSprite(100,200,20,30);
  speed=random(55,90)
  weight=random(400,1500) 
  
}

function draw() {
  background(255,255,255);
   
  carMov.velocityX=speed;
  if(wallFix.x-carMov.x<(carMov.width+wallFix.width)/2){
    carMov.velocityX=0;
    carMov.x=690;
    deformation=0.5* weight*speed*speed/22500
    if(deformation<300&&deformation>200){
      carMov.shapeColor="red"
    }
    if(deformation>100&&deformation<200){
      carMov.shapeColor="yellow"
    }
    if(deformation<100){
      carMov.shapeColor="green"
    }
  }
  drawSprites();
}