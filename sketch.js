function setup() {
  createCanvas(800,400);
 Callup= createSprite(400, 200, 50, 50);
 Decline= createSprite(300,200,50,100);
}

function draw() {
  background('cyan');
   Callup.x=mouseX 
   Callup.y=mouseY
  if(abs(Callup.x-Decline.x) <= Callup.width/2+Decline.width/2 &&
  abs(Callup.y-Decline.y) <= Callup.height/2+Decline.height/2){
    Callup.shapeColor="yellow"
    Decline.shapeColor="yellow"
  }else{
    Callup.shapeColor="green"
    Decline.shapeColor="green"
  }
  drawSprites();
}