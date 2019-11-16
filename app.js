
var player;

var hp;

var hpString;
var gameStarted = true;

var gameFinish = false;

var gameplay = new Phaser.Class({
    
    Extends: Phaser.Scene,
    
    initialize: function gameplay(){
        Phaser.Scene.call(this, { key: "gameplay" });
    },

    preload: function()
    {
        /*
            Load background image
        */

        this.load.image("testoru", "Salle.png");

        /*
            Load player image
        */

        this.load.spritesheet("dude", "test.png",
        {
            frameWidth: 32,
            frameHeight: 48
        });
    },

    create: function()
    {
        /*
            Create background image
        */

        var back = this.add.image(config.width/2, config.height/2, 'testoru').setScale(1, 1);
        
       /*
            Create player's character and set his position
        */

       player = this.physics.add.sprite(config.width / 2, (config.height / 2) + 360 , "dude").setScale(1.5, 1.5);

       /*
            Create players animations
        */

        this.anims.create({
            key: "down",
            frames: this.anims.generateFrameNumbers("dude", {start: 0, end: 0}),
            repeat: -1
        });
        this.anims.create({
            key: "up",
            frames: this.anims.generateFrameNumbers("dude", {start: 1, end: 1}),
            repeat: -1
        });
        this.anims.create({
            key: "right",
            frames: this.anims.generateFrameNumbers("dude", {start: 2, end: 2}),
            repeat: -1
        });
        this.anims.create({
            key: "left",
            frames: this.anims.generateFrameNumbers("dude", {start: 3, end: 3}),
            repeat: -1
        });
        /*
            create a cursors to keyboard's input
        */

        cursors = this.input.keyboard.createCursorKeys();
    },
    
    update: function(){

        /*
            Create player mouvements
        */

        player.setVelocity(0, 0);
        if (gameStarted && !gameFinish) {
            if (cursors.left.isDown) {
                player.setVelocityX(-150);
                player.anims.play("left");
            }
            else if (cursors.right.isDown){
                player.setVelocityX(150);
                player.anims.play("right");
            }
            else if(cursors.up.isDown){
                player.setVelocityY(-150);
                player.anims.play("up");
            }
            else if(cursors.down.isDown){
                player.setVelocityY(150);
                player.anims.play("down");
            }
        }


        }
});


var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 800,
    pixelArt: true,
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 0 },
        debug: false
      }
    },
    scene: gameplay
  };
  
  var game = new Phaser.Game(config);
