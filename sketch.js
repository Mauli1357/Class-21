
var movrect, fixrect;
var g1, g2, g3;

function setup() {
  createCanvas(1200,800);
  movrect = createSprite(600,400,80,30);
  movrect.shapeColor = "red";

  fixrect = createSprite(600,400,30,80);
  fixrect.shapeColor = "red";

  g1 = createSprite(50,50,20,20);
  g1.shapeColor = "red";

  g2 = createSprite(100,50,20,20);
  g2.shapeColor = "red";
  
  g3 = createSprite(150,50,20,20);
  g3.shapeColor = "red";
}

function draw() {
  background(0); 
  
  movrect.x = mouseX;
  movrect.y = mouseY;

  if(isTouching(movrect, g1))
  {
    movrect.shapeColor = "green";
    g1.shapeColor = "green";
  }
  else
  {
    movrect.shapeColor = "red";
    g1.shapeColor = "red";
  }
  
  drawSprites();
}

function isTouching(object1, object2)
{
  if (object1.x - object2.x < object1.width/2 + object2.width/2 &&
    object2.x - object1.x < object1.width/2 + object2.width/2 &&
    object1.y - object2.y < object1.height/2 + object2.height/2 &&
    object2.y - object1.y < object1.height/2 + object2.height/2)
    {
      return true;
    }
    else
    {
      return false;
    }


}










