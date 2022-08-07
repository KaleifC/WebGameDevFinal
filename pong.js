class pong extends Phaser.Scene{
    preload(){
        this.load.image('player1','assets/sprites/p1.png')
        this.load.image('player2','assets/sprites/p2.png')
        this.load.image('ball','assets/sprites/ball.png')
    }
    create(){
        this.cursor= this.input.keyboard.createCursorKeys();
        this.player1= this.physics.add.sprite(780, 200, 'player1');
        this.player1.setCollideWorldBounds(true);

        this.player2= this.physics.add.sprite(20, 200, 'player2');
        this.player2.setCollideWorldBounds(true);
        this.keyW= this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
        this.keyS= this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)

        this.ball= this.physics.add.sprite(400, 200, 'ball');
        this.ball.setCollideWorldBounds(true);
        this.ball.setBounce(1);

        this.ball.setVelocityY(velocityY);
        this.ball.setVelocityX(velocityX);
        
        this.player1.setImmovable(true);
        this.physics.add.collider(this.ball,this.player1, this.hitplayer1, null, this)
        this.player2.setImmovable(true);
        this.physics.add.collider(this.ball,this.player2, this.hitplayer2, null, this)

        this.scoreTextP1= this.add.text(16, 16, 'Score: 0',{fontSize:'16px',fill:'#FFFFFF'})
        this.scoreTextP2= this.add.text(700, 16, 'Score: 0',{fontSize:'16px',fill:'#FFFFFF'})
    }
    hitplayer1(ball,player1){
        velocityX=velocityX+50;
        velocityX=velocityX*-1;
        this.ball.setVelocityX(velocityX);
        if(velocityY<0){
            velocityY=velocityY*-1;
            this.ball.setVelocityY(velocityY);
        }
    }
    hitplayer2(ball,player2){
        velocityX=velocityX-50;
        velocityX=velocityX*-1;
        this.ball.setVelocityX(velocityX);
        if(velocityY<0){
            velocityY=velocityY*-1;
            this.ball.setVelocityY(velocityY);
        }
    }
    update(){
        if(this.cursor.up.isDown){
            this.player1.setVelocityY(-150);
        }else if(this.cursor.down.isDown){
            this.player1.setVelocityY(150);
        }else{
            this.player1.setVelocityY(0);
        }

        if(this.keyW.isDown){
            this.player2.setVelocityY(-150);
        }else if(this.keyS.isDown){
            this.player2.setVelocityY(150);
        }else{
            this.player2.setVelocityY(0);
        }

        if(this.ball.x==796){
            scoreP1 += 1;
            this.scoreTextP1.setText('Score: '+scoreP1);
            this.reset();
        }
        if(this.ball.x==4){
            scoreP2 += 1;
            this.scoreTextP2.setText('Score: '+scoreP2);
            this.reset();
        }
    }
    reset(){
        velocityX=Phaser.Math.Between(-100,100);
        velocityY=100;
        this.ball.x=400;
        this.ball.y=200;
        this.player1.x=780;
        this.player1.y=200;
        this.player2.x=20;
        this.player2.y=200;
        this.ball.setVelocityX(velocityX);
        this.ball.setVelocityY(velocityY);
    }

}