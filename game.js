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
