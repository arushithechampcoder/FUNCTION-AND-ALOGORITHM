var movingRect,fixedRect;
var gameobject1,gameobject2,gameobject3,gameobject4;

function setup(){
createCanvas(400,400);
movingRect=createSprite(400,200,80,30);
movingRect.shapeColor="green";
fixedRect=createSprite(200,200,50,80);
fixedRect.shapeColor="green";
gameobject1=createSprite(50,100,50,50);
gameobject1.shapeColor="green";
gameobject2=createSprite(120,100,50,50);
gameobject2.shapeColor="green";
gameobject3=createSprite(190,100,50,50);
gameobject3.shapeColor="green";
gameobject4=createSprite(260,100,50,50);
gameobject4.shapeColor="green";
fixedRect.debug="true"
movingRect.debug="true";
gameobject1.debug="true";
gameobject2.debug="true";
gameobject3.debug="true";
gameobject4.debug="true";
}

function draw(){
background("black");
movingRect.x=mouseX;
movingRect.y=mouseY;

if(isTouching(movingRect,gameobject1)){
  movingRect.shapeColor="blue";
  gameobject1.shapeColor="blue";
}
else{
  movingRect.shapeColor="green";
  gameobject1.shapeColor="green";
}
bounceOff(movingRect,fixedRect)
drawSprites();
}



function isTouching(object1,object2){

  if(object1.x-object2.x<=object1.width/2+object2.width/2
    &&object2.x-object1.x<=object1.width/2+object2.width/2
    &&object1.y-object2.y<=object1.height/2+object2.height/2
    &&object2.y-object1.y<=object1.height/2+object2.height/2)
    {
    return true;
  }
  else{
   return false;
  }
}

function bounceOff(object1,object2)
{
if(object1.x-object2.x<=object1.width/2+object2.width/2
  &&object2.x-object1.x<=object1.width/2+object2.width/2)
  {
    object1.velocityX=1
    object2.velocityX=1
  }
  else{
    object1.velocityX=0;
    object2.velocityY=0;
  }
  if(object1.y-object2.y<=object1.height/2+object2.height/2
    &&object2.y-object1.y<=object1.height/2+object2.height/2)
    {
      object1.velocityY=1
      object2.velocityY=1
    }
  
}