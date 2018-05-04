var ship;
var game;
var starfield;
var missile;
var missile2;
var timer;
var missiles = [];
function Missile(){
    tMissile = new Sprite(game, 'http://aharrisbooks.net/h5g/h5g_8/missile.png', 30, 20);
    
     
    
    tMissile.hide(); 
    
    tMissile.fire = function(){ 
        missiles.push(this);
        this.show(); 
        tMissile.setSpeed(15); 
        this.setPosition(ship.x, ship.y); 
        this.setAngle(ship.getImgAngle());
        this.addVector(ship.getImgAngle(), 15); 
        this.setBoundAction(DIE);
    };
    return tMissile;
}
function Ship(){
    tShip = new Sprite(game, 'http://aharrisbooks.net/h5g/h5g_8/ship.png', 25, 25);
    
    tShip.checkKeys = function(){
        if(keysDown[K_LEFT]){
            this.changeImgAngleBy(-5)
        }
        if(keysDown[K_RIGHT]){
            this.changeImgAngleBy(5)
        }
        if(keysDown[K_UP]){
            this.addVector(this.getImgAngle(), .1);
        }
        if(keysDown[K_SPACE]){
            if(timer.getElapsedTime() >= .5){
                 missile = new Missile();
                 missile.fire();
                 timer.reset();
            }
           
        }
        this.addVector(this.getImgAngle(), (this.speed / 20))
    }
    
    tShip.checkDrag = function(){
        speed = this.getSpeed();
        speed *= .95
        this.setSpeed(speed);
    }
    return tShip;
}


function init(){
  game = new Scene ();
  starfield = new Sprite(game, 'http://www.hd-freewallpapers.com/latest-wallpapers/desktop-cartoon-space-background-download.jpg', 2000, 2000);
  starfield.setSpeed(0);
  timer = new Timer();
  ship = new Ship();
  missile = new Missile();
  game.start();
}

function update(){
    game.clear();
    starfield.update();
    ship.checkKeys();
    ship.checkDrag();
    ship.update();
    missile.update(); 
    //for each loop
    missiles.forEach(function(element){
        element.update();
   });
   

   
}