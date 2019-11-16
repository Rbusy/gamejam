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
var cptboucle = 0;
var cpt = 0;

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


        this.load.image("testoru", "assets/Salle.png");

        /*
            Load player image
        */

        this.load.spritesheet("dude", "assets/test.png",
        {
            frameWidth: 32,
            frameHeight: 48
        });
        this.load.spritesheet("patient", "test.png",
            {
                frameWidth: 32,
                frameHeight: 48
            });
        
    },

    createDude: function(name)
    {
        
        /*
            Create player's character and set his position
        */
        if (name == "dude")
        {
            player = this.physics.add.sprite(config.width / 2, (config.height / 2) + 360 , name).setScale(1.5, 1.5);
            this.anims.create({
                key: "down",
                frames: this.anims.generateFrameNumbers(name, {start: 0, end: 0}),
                repeat: -1
            });
            this.anims.create({
                key: "up",
                frames: this.anims.generateFrameNumbers(name, {start: 1, end: 1}),
                repeat: -1
            });
            this.anims.create({
                key: "right",
                frames: this.anims.generateFrameNumbers(name, {start: 2, end: 2}),
                repeat: -1
            });
            this.anims.create({
                key: "left",
                frames: this.anims.generateFrameNumbers(name, {start: 3, end: 3}),
                repeat: -1
            });
        }
        else
        {
            
            
            patient.push(this.physics.add.sprite(config.width / 2, (config.height / 2) , "dude").setScale(1.5, 1.5));
            console.log(name);
            
        }
        /*
            Create players animations
        */
       
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


        
    },

    create: function()
    {
        /*
            Create background image
        */

        var back = this.add.image(config.width/2, config.height/2, 'testoru').setScale(1, 1);
        
        /*
            create a cursors to keyboard's input
        */
        this.createDude("dude");
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
    
    moverandom: function(patient, move)
    {
        /*
            move patient randomly
         */
        var move = Math.floor(Math.random() * Math.floor(4));
        
        if (move == 0)
        {
            patient.setVelocityX(-150);
            patient.anims.play("left");
        }
        if (move == 1)
        {
            patient.setVelocityX(150);
            patient.anims.play("right");
        }
        if (move == 2)
        {
            patient.setVelocityY(-150);
            patient.anims.play("up");
        }
        if (move == 3)
        {
            patient.setVelocityY(150);
            patient.anims.play("down");
        }

    },

    update: function(){

        /*
            Create player mouvements
        */
        if (cpt > 600 && cpt % 100 == 0)
        {
            patient[0].disableBody(true, true);
            patient.shift();
        }
        if (cpt % 100 == 0)
        {
            this.createDude("patient" + cpt);  
        }
        if (cpt == 0)
        {
            console.log(patient[0]);
            patient[0].disableBody(true, true);
            patient.pop();
        }
        
        cptboucle = 0;
        if (cpt % 4 == 0)
        {
            while (cptboucle < patient.length)
            {
                this.moverandom(patient[cptboucle], cptboucle );
                cptboucle++;
            }
        }
        cpt++;

        /*
            key event
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
