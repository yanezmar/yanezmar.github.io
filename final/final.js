var charecter;
var witch;

var bullet;
var bullet2;

var bullets = [];
var gun;
var scene;
var game;
var woods;
var crosshair;

 




//bullet

function Bullet() {

    tBullet = new Sprite(scene, "https://chrismalnu.files.wordpress.com/2016/02/clash2.png?w=680", 25, 50);
    tBullet.setSpeed(0);
    //////////JUST ADDED
//////just added!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
       tBullet.setImgAngle(90);

    tBullet.hide();
    
     tBullet.fire = function(){ 
       bullets.push(this);
        this.show(); 
        tBullet.setSpeed(60); 
        this.setPosition(gun.x, gun.y); 
        this.setAngle(gun.getImgAngle());
        this.addVector(gun.getImgAngle(), 15); 
        this.setBoundAction(DIE);
         this.setAngle(0);
         this.setImgAngle(90);
    };


    return tBullet;

}

function Crosshair() {
    tCrosshair = new Sprite(scene, "https://t5.rbxcdn.com/57d0488a295555b9425252a5755880e9", 100, 100);
    tCrosshair.setSpeed(0);
    tCrosshair.setPosition(150, 300);

    tCrosshair.followMouse = function() {
        this.setPosition(scene.getMouseX(), 300);
    };


    return tCrosshair;

}



function Gun() {
    tGun = new Sprite(scene, "http://i.imgur.com/8BZYIe8.gif", 400, 400);
    tGun.setSpeed(0);
    tGun.setPosition(600, 250);



    //Motion
    tGun.followMouse = function() {
        this.setPosition(scene.getMouseX(), 500);
    };


//just added

 tGun.checkKeys = function(){
       if(keysDown[K_SPACE]){
            if(timer.getElapsedTime() >= .5){
                 bullet = new Bullet();
                 bullet.fire();
                 timer.reset();
            }
           
        }
 }

    return tGun;
}

function init() {

    //game
    scene = new Scene();
    scene.setSize(700, 500);
    scene.hideCursor();
    //woods
    woods = new Sprite(scene, "https://art.ngfiles.com/images/252000/252502_extremefudgemaster_spooky-forest-layout.jpg?f1370894137", 1000, 800);
    woods.setSpeed(0);
    //witch
    witch = new Sprite(scene, "http://myweb.tiscali.co.uk/kenstreasure/sprites/witch.gif", 150, 150);
    witch.setPosition(50, 300);
    witch.setSpeed(40);
    //gun
    gun = new Gun();

    //crosshair
    crosshair = new Crosshair();
    
    //bullet
    bullet = new Bullet();
    //for each loop

        timer = new Timer();
    scene.start();
    
        
        

}


function update() {

    scene.clear();
    gun.followMouse();
    crosshair.followMouse();

    woods.update();
     gun.checkKeys();
    witch.update();
    gun.update();
    crosshair.update();
    bullet.update();
    scene.update();
 bullets.forEach(function(element){
        element.update();
   });

}