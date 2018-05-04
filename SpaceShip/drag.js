var game;
var car;

function Car(){
    tCar = new Sprite(game, "http://aharrisbooks.net/h5g/h5g_8/car.png", 50, 50);
    
   tCar.checkKeys = function(){
        if(keysDown[K_LEFT]){
            this.changeImgAngleBy(-5);
        }
        if(keysDown[K_RIGHT]){
            this.changeImgAngleBy(5);
        }
        if(keysDown[K_UP]){
            this.addVector(this.imgAngle, 2);
        }
    }
    
    return tCar;
}

function init(){
    game = new Scene();
    //0 - f; a-10, B-11, C-12 ... f-15
    game.setBG('#667799');
    car = new Car();
    game.start();
}

function update(){
    game.clear();
    car.checkKeys();
    car.update();
}