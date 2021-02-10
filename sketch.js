//Create variables here
var dog
var database 
var foodS , foodStock 
var feedButton, addButton
var lastFed,fedTime
var dog_image, happyDog_image 
var foodObj
var feedDog


function preload()
{
  //load images here
  dog_image = loadImage("images/dogImg.png");
  happyDog_image = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(850, 500);
  
    dog = createSprite(150,170,10,10);

    dog.addImage(dog_image);
    dog.scale = 0.2;

    database = firebase.database();

    database.ref("Food").on("value", function(data){
        foodS = data.val();
        console.log(foodS);
    })

    foodObj = new Food();

    feed = createButton("Feed the Dog");
    feed.position(700,95);
    feed.mousePressed(feedDog);

    addFood = createButton("Add Food");
    addFood.position(800,95);
    addFood.mousePressed(addFood);
  
}


function draw() {  
  background(46,139,87);

  if(keyDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(happyDog_image)
  }

  drawSprites();
  //add styles here
  textSize(15);
  stroke("white")
  fill("black");
  text("Note : Please press Up arrow to feed the dog Milk", 100,40);

  textSize(13);
  stroke("white");
  fill("black");
  text("Food remaining : "  + foodS, 200, 100)

  foodObj.display();
}

function readStock(){
  foodS = data.val();
}

function writeStock(x){
   if(x <= 0){
     x = 0
   }else{
     x = x-1
   }

   database.ref('/').update({
     Food : x
   })
}



