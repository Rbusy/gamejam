/*
    var players
*/

var player;
var doctor = [];
var patient = [];
var searcher = [];

/*
    var interface
*/

var hp = 5;
var hpString;
var hpText = "HP = ";

var money = 0;
var moneyString;
var moneyText = "$ = ";

var pc = 0;
var pcString;
var pcText = "PC = ";

/*
    var gameStat
*/

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

        /*
            add UI interface text
        */

        hpString = this.add.text(32, 24, hpText + hp,{fontFamily: '"Times New Roman"' });
        hpString.setColor('#ec2000');
        
        moneyString = this.add.text(120, 24, moneyText + money,{fontFamily: '"Times New Roman"' });
        moneyString.setColor('#ec2000');

        pcString = this.add.text(200, 24, pcText + pc,{fontFamily: '"Times New Roman"' });
        pcString.setColor('#ec2000');


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
