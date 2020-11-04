
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var survival_time;
var ground;
function preload(){  
monkey_running =           loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png"); 
bananaImage = loadImage("banana.png");
obstacleImage = loadImage("obstacle.png");
}



function setup() {
createCanvas(600,600);  
monkey=createSprite(80,315,20,20);
monkey.addAnimation("running",monkey_running);
monkey.scale = 0.1; 
ground=createSprite(400,350,900,10);
ground.x=ground.width/2;
ground.velocityX =-4;
  
survival_time=0 
  
FoodGroup = new Group();
obstacleGroup = new Group();
}


function draw() {
background("white"); 

stroke("black");
textSize(20);
fill("white");
survival_time=Math.ceil(frameCount/frameRate())
text("SurvivalTime: "+ survival_time,100,50);
 
if (ground.x<300){
ground.x=ground.width/2;
}
if(keyDown("space")){
monkey.velocityY=-12;
}
monkey.velocityY=monkey.velocityY + 0.8  
spawnfood();
spawnobstacles(); 
monkey.collide(ground);
drawSprites();
  
}
function spawnfood(){
if (frameCount % 80 === 0){
banana=createSprite(600,100,40,40);
banana.y=Math.round(random(120,200));
banana.addImage(bananaImage);
banana.scale=0.1;
banana.velocityX=-3;
banana.lifetime=-1;
FoodGroup.add(banana);
}
}
function spawnobstacles(){
if (frameCount % 300 === 0){
obstacle=createSprite(600,320,40,40);
obstacle.addImage(obstacleImage);
obstacle.scale=0.2;
obstacle.velocityX=-3;
obstacle.lifetime=-1;
obstacleGroup.add(obstacle);
}
}




