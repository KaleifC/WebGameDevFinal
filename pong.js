class pong extends Phaser.Scene{
    preload(){
        this.load.image('player1','assets/sprites/p1.png')
        this.load.image('player2','assets/sprites/p2.png')
    }
    create(){
        this.cursor= this.input.keyboard.createCursorKeys();
        this.player1= this.physics.add.sprite(780, 200, 'player1');
        this.player1.setCollideWorldBounds(true);

        this.player2= this.physics.add.sprite(20, 200, 'player2');
        this.player2.setCollideWorldBounds(true);
        this.keyW= this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
        this.keyS= this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
    }
    update(){
        //player 1 control
        if(this.cursor.up.isDown){
            this.player1.setVelocityY(-150);
        }else if(this.cursor.down.isDown){
            this.player1.setVelocityY(150);
        }else{
            this.player1.setVelocityY(0);
        }

        //player 2 control
        if(this.keyW.isDown){
            this.player2.setVelocityY(-150);
        }else if(this.keyS.isDown){
            this.player2.setVelocityY(150);
        }else{
            this.player2.setVelocityY(0);
        }
    }
}