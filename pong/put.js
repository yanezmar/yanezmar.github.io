var scene;
var pingball;
var paddle;
var paddle2;
var CHANGE = 5;
var music;

function Paddle(){
    tPaddle = new Sprite(scene, "Paddle.png", 100, 10);
    tPaddle.setAngle(180);
    tPaddle.setSpeed(0);
    
    tPaddle.checkKeys = function(){
        if (keysDown[K_UP]){
            this.changeYby(-CHANGE);
            if (this.y - this.width/2 < 0){
                this.setY(this.width/2);
            }
        }
        
        if (keysDown[K_DOWN]){
            this.changeYby(CHANGE);
            if(this.y + this.width/2 > scene.height){
                this.setY(scene.height - this.width/2);
            }
        }
        
    };
    
    return tPaddle;
}

function Pingball(){
    tPingball = new Sprite(scene, "puttball.png", 100, 100);
    tPingball.setMoveAngle(33);
    tPingball.setSpeed(10);
    tPingball.setBoundAction(BOUNCE);
    
    return tPingball;
}

function checkCollisions(){
    if(paddle.collidesWith(pingball)){
        pingball.dx *= -1;
        pingball.dy *= -1;
    }else if(paddle2.collidesWith(pingball)){
        pingball.dx *= -1;
        pingball.dy *= -1;
    }
}
function init(){
    scene = new Scene();
    scene.setSize(600, 300);
    pingball = new Pingball();
    paddle = new Paddle();
    paddle.setPosition(paddle.height, scene.height / 2);
    paddle2 = new Paddle();
    paddle2.setSpeed(5);
    paddle2.setPosition(scene.width - paddle2.height, scene.height / 2);
    paddle2.setBoundAction(BOUNCE);
    EPICMUSIC = new Sound("bensound-dubstep.mp3")
    
    scene.start();
    music.play();
}

function update(){
    scene.clear();
    checkCollisions();
    pingball.update();
    paddle.checkKeys();
    paddle.update();
    paddle2.update();
    
}