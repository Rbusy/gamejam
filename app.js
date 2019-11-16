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

<<<<<<< HEAD
/*
    var toCollect
*/

var toCollect1;
var toCollect2;
var toCollect3;
=======
>>>>>>> origin/huma-gp

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

        this.load.image("testoru", "assets/Salle.png");
<<<<<<< HEAD
        this.load.image("star", "assets/star.png");
        this.load.image("diamond", "assets/diamond.png");
        this.load.image("mushroom", "assets/mushroom.png");
=======
>>>>>>> origin/huma-gp

        /*
            Load player image
        */

        this.load.spritesheet("dude", "assets/test.png",
        {
            frameWidth: 32,
            frameHeight: 48
        });
<<<<<<< HEAD
=======

        /* 
            Load patient images
        */

        this.load.spritesheet("patientDroite", "assets/droite.png",
        {
            frameWidth: 200,
            frameHeight: 280
        });

        this.load.spritesheet("patientGauche", "assets/gauche.png",
        {
            frameWidth: 154,
            frameHeight: 202
        });
        this.load.spritesheet("patientUp", "assets/up.png",
        {
            frameWidth: 200,
            frameHeight: 280
        });
        this.load.spritesheet("patientDown", "assets/down.png",
        {
            frameWidth: 200,
            frameHeight: 280
        });


        
>>>>>>> origin/huma-gp
    },

    create: function()
    {
        /*
            Create background image
        */

        var back = this.add.image(config.width/2, config.height/2, 'testoru').setScale(1, 1);
<<<<<<< HEAD
        this.toCollect1 = this.physics.add.image(config.width/2 + 100, config.height/2, 'star').setScale(1, 1);
        this.toCollect2 = this.physics.add.image(config.width/2, config.height/2, 'diamond').setScale(1, 1);
        this.toCollect3 = this.physics.add.image(config.width/2 - 100, config.height/2, 'mushroom').setScale(1, 1);
=======
>>>>>>> origin/huma-gp
        
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
<<<<<<< HEAD
=======

        /*
            Create animation for npc
        */
        var patrightAnimation = this.anims.create({
            key: 'walpatright',
            frames: this.anims.generateFrameNumbers('patientDroite'),
            frameRate: 4,
            repeat: 1
        });

        var patleftAnimation = this.anims.create({
            key: 'walpatleft',
            frames: this.anims.generateFrameNumbers('patientGauche'),
            frameRate: 12,
            repeat: 0
        });

        var patupAnimation = this.anims.create({
            key: 'walpatup',
            frames: this.anims.generateFrameNumbers('patientHaut'),
            frameRate: 4,
            repeat: 1
        });

        var patdownAnimation = this.anims.create({
            key: 'walpatdown',
            frames: this.anims.generateFrameNumbers('patientBas'),
            frameRate: 4,
            repeat: 1
        });

       /* var sprite = this.add.sprite(300, 300, 'patientGauche').setScale(0.4);
      
        sprite.play('walpatleft');
        sprite.anims.setRepeat(7);
        
        
        this.tweens.add({
            targets: sprite,
            x: -650,
            duration: 4000,
            ease: 'Linear'
        });
    */
   
    


>>>>>>> origin/huma-gp
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

<<<<<<< HEAD
        this.physics.add.overlap(player, this.toCollect1, this.collect, null, this);
        this.physics.add.overlap(player, this.toCollect2, this.collect, null, this);
        this.physics.add.overlap(player, this.toCollect3, this.collect, null, this);
        this.player = player;
=======
>>>>>>> origin/huma-gp

    },
    
    update: function(){

        /*
<<<<<<< HEAD
            Create player movements
=======
            Create player mouvements
>>>>>>> origin/huma-gp
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
<<<<<<< HEAD
    },

    collect: function(player, toCollect){
        if (toCollect === this.toCollect1){pc += 50;}
        if (toCollect === this.toCollect2){pc += 10;}
        if (toCollect === this.toCollect3){pc += 1;}
        pcString.setText('PC = ' + pc);
        toCollect.disableBody(true, true);
    }
=======


        }
>>>>>>> origin/huma-gp
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
  
<<<<<<< HEAD
  var game = new Phaser.Game(config);
=======
  var game = new Phaser.Game(config);
>>>>>>> origin/huma-gp
