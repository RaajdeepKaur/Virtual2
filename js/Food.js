class Food{
    constructor(){
        this.image = loadImage("images/Milk.png");
        this.foodStock = 0;
        this.lastFed = "";
    }
    getFoodStock(){

    }
    updateFoodStock(){

    }
    deductFoodStock(){

    }
    display(){
        
     fill(255,255,254);
     textSize(15);
       if(lastFed >= 12){
           text("Last Feed :"+ lastFed % 12 + "PM",350, 30);
       }else if(lastFed == 0){
           text("Last Feed : 12 AM", 350,30);
       }else{
           text("Last Feed :"+ lastFed + "AM", 350, 30);
       }
    }
}