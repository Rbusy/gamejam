/*
    var players
*/
var populace = 6;
var player;
var doctor = [];
var patient = [];
var searcher = [];

/*
    var interface
*/
var cptboucle = 0;
var cpt = 0;

var redP = 0;
var yelP = 0;
var redPText = "red Pills = ";
var yelPText = "yellow Pills = ";


var money = 50;
var moneyText = "$ = ";

/*
    var gameStat
*/

var gameStarted = true;
var gameFinish = false;

var pills = [];

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


        this.load.image("testoru", "assets/Salle.jpg");
        this.load.image("star", "assets/star.png");
        this.load.image("red", "assets/redPills.png");
        this.load.image("yellow", "assets/yellowPills.png");
        /*
            Load player image
        */

        this.load.spritesheet("dude", "assets/test.png",
        {
            frameWidth: 32,
            frameHeight: 48
        });
        this.load.spritesheet("patient", "assets/testpatient.png",
            {
                frameWidth: 34,
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
            
            
            patient.push(this.physics.add.sprite((config.width / 2) - 600 , (config.height / 2) - 200 , "patient").setScale(1.5, 1.5));
            this.physics.add.overlap(this.player, patient, this.soigner, null, this);
            this.anims.create({
                key: "downP",
                frames: this.anims.generateFrameNumbers("patient", {start: 0, end: 0}),
                repeat: -1
            });
            this.anims.create({
                key: "upP",
                frames: this.anims.generateFrameNumbers("patient", {start: 1, end: 1}),
                repeat: -1
            });
            this.anims.create({
                key: "rightP",
                frames: this.anims.generateFrameNumbers("patient", {start: 2, end: 2}),
                repeat: -1
            });
            this.anims.create({
                key: "leftP",
                frames: this.anims.generateFrameNumbers("patient", {start: 3, end: 3}),
                repeat: -1
            });
            this.player = player;
            
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

    createPills: function()
    {
        if(pills[0] == null)
        {
            pills[0] = this.physics.add.image(config.width/2 + 550, config.height/2 - 200, 'yellow').setScale(0.3, 0.3);
            this.physics.add.overlap(player, pills[0], this.collectY, null, this);
        }
        

        if(pills[1] == null)
        {
            pills[1] = this.physics.add.image(config.width/2 + 650, config.height/2 - 200, 'yellow').setScale(0.3, 0.3);
            this.physics.add.overlap(player, pills[1], this.collectY, null, this);
        }
        
        if(pills[2] == null)
        {
            pills[2] = this.physics.add.image(config.width/2 + 450, config.height/2 - 200, 'yellow').setScale(0.3, 0.3);
            this.physics.add.overlap(player, pills[2], this.collectY, null, this);
        }
        
        if(pills[3] == null)
        {
            pills[3] = this.physics.add.image(config.width/2 + 550, config.height/2 - 300, 'yellow').setScale(0.3, 0.3);
            this.physics.add.overlap(player, pills[3], this.collectY, null, this);
        }

        if(pills[4] == null)
        {
            pills[4] = this.physics.add.image(config.width/2 + 550, config.height/2 - 100, 'yellow').setScale(0.3, 0.3);
            this.physics.add.overlap(player, pills[4], this.collectY, null, this);
        }

        
        if(pills[5] == null)
        {
            pills[5] = this.physics.add.image(config.width/2, config.height/2 - 200, 'red').setScale(0.3, 0.3);
            this.physics.add.overlap(player, pills[5], this.collectR, null, this);
        }
        
        if(pills[6] == null)
        {
            pills[6] = this.physics.add.image(config.width/2 + 100, config.height/2 - 200, 'red').setScale(0.3, 0.3);
            this.physics.add.overlap(player, pills[6], this.collectR, null, this);
        }
        if(pills[7] == null)
        {
            pills[7] = this.physics.add.image(config.width/2 - 100, config.height/2 - 200, 'red').setScale(0.3, 0.3);
            this.physics.add.overlap(player, pills[7], this.collectR, null, this);
        }

        if(pills[8] == null)
        {
            pills[8] = this.physics.add.image(config.width/2, config.height/2 - 300, 'red').setScale(0.3, 0.3);
            this.physics.add.overlap(player, pills[8], this.collectR, null, this);
        }

        if(pills[9] == null)
        {
            pills[9] = this.physics.add.image(config.width/2, config.height/2 - 100, 'red').setScale(0.3, 0.3);
            this.physics.add.overlap(player, pills[9], this.collectR, null, this);
        }

        
        //this.physics.add.overlap(player, this.pills, this.collectY, null, this);
        

        
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
        this.createPills();
       /*
            Create player's character and set his position
        */

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
        
        this.anims.create({
            key: "down",
            frames: this.anims.generateFrameNumbers("patient", {start: 0, end: 0}),
            repeat: -1
        });
        this.anims.create({
            key: "up",
            frames: this.anims.generateFrameNumbers("patient", {start: 1, end: 1}),
            repeat: -1
        });
        this.anims.create({
            key: "right",
            frames: this.anims.generateFrameNumbers("patient", {start: 2, end: 2}),
            repeat: -1
        });
        this.anims.create({
            key: "left",
            frames: this.anims.generateFrameNumbers("patient", {start: 3, end: 3}),
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
        redPText = this.add.text(32, 24, redPText + redP,{fontFamily: '"Times New Roman"' });
        redPText.setColor('#ec2000');
        
        moneyText = this.add.text(120, 24, moneyText + money,{fontFamily: '"Times New Roman"' });
        moneyText.setColor('#ec2000');

        yelPText = this.add.text(200, 24, yelPText + yelP,{fontFamily: '"Times New Roman"' });
        yelPText.setColor('#ec2000');

        this.player = player;
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
            patient.anims.play("leftP");
        }
        if (move == 1)
        {
            patient.setVelocityX(150);
            patient.anims.play("rightP");
        }
        if (move == 2)
        {
            patient.setVelocityY(-150);
            patient.anims.play("upP");
        }
        if (move == 3)
        {
            patient.setVelocityY(150);
            patient.anims.play("downP");
        }

    },

    update: function(){

        /*
            Create player mouvements
        */
        if (patient.length > populace && patient.length != 0 && cpt % 100 == 0)
        {
            patient[0].disableBody(true, true);
            patient.shift();
        }
        if (cpt % 100 == 0)
        {
            this.createDude("patient" + cpt);
            money -= 3;
            moneyText.setText('$ = ' + money);
            if (money <= 0)
            {
                
            }

            this.createPills();
        }
        if (cpt == 0)
        {
            patient[0].disableBody(true, true);
            patient.pop();
        }
        player.setCollideWorldBounds(true);
        cptboucle = 0;
        if (cpt % 12 == 0)
        {
            while (cptboucle < patient.length)
            {
                patient[cptboucle].setCollideWorldBounds(true);
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
                player.setVelocityX(-300);
                player.anims.play("left");
            }
            else if (cursors.right.isDown){
                player.setVelocityX(300);
                player.anims.play("right");
            }
            else if(cursors.up.isDown){
                player.setVelocityY(-300);
                player.anims.play("up");
            }
            else if(cursors.down.isDown){
                player.setVelocityY(300);
                player.anims.play("down");
            }
        }
    },

    collectR: function(player, actual){
        if (redP == 0 && yelP == 0)
        {
            redP += 1;
            redPText.setText('red Pills = ' + redP);
            pills[pills.indexOf(actual)] = null;
            
            actual.disableBody(true, true);
        }
        
    },
    collectY: function(player, actual){
        if (redP == 0 && yelP == 0)
        {
            yelP += 1;
            yelPText.setText('yellow Pills = ' + yelP);
            pills[pills.indexOf(actual)] = null;

            actual.disableBody(true, true);
        }
    },
    soigner: function(player, actual){
        if (redP != 0 || yelP != 0)
        {
            actual.disableBody(true, true);
            patient.splice(patient.indexOf(actual),1);
            
            if (redP != 0)
            {
                redP = 0;
                money += 10;
                moneyText.setText('$ = ' + money);
                populace -=2;
                redPText.setText('red Pills = ' + redP);
            }
            if (yelP != 0)
            {
                yelP = 0;
                money += 5;
                moneyText.setText('$ = ' + money);
                populace += 2;
                yelPText.setText('yellow Pills = ' + redP);
            }
        }
    }
});

var config = {
    type: Phaser.AUTO,
    width: 1700,
    height: 900,
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
