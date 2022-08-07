var config={
    type: Phaser.AUTO,
    width: 800,
    height: 400,
    scene: [pong],
    physics:{
        default:'arcade'
    }
};
var game= new Phaser.Game(config);
var velocityX=Phaser.Math.Between(-100, 100);
var velocityY=100;
var scoreP1=0;
var scoreP2=0;