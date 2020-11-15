//Create variables here
var dog,happydog,database,foodS,foodStock;
var dogImg,happydogImg;
function preload()
{
  //load images here
  dogImg=loadImage("images/dogimg.png")
  happydogImg=loadImage("images/dogimg1.png")
}

function setup() {
  database=firebase.database();
  createCanvas(500, 500);
  dog=createSprite(200,200,50,50);
  dog.addImage("normaldog",dogImg) ;
  dog.scale=0.5
 foodStock=database.ref('food');
 foodStock.on("value",readStock);
textSize(20);

}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW))
{
  writeStock(foodS)
  dog.addImage(dogImg);
}
  drawSprites();
  stroke("black")
text("Food remaining: " + foodS,170,200)
text("Press UP_ARROW key to feed Drago milk")
textSize(35)
fill("red")
stroke("white")
}

function readStock(data){
  foodS=data.val();

}

function writeStock(x){

  if(x<=0){
    x=0
  }else{
    x=x-1
  }
  
  database.ref('/').update({
    food:x
  })
}


