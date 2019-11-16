

var player;
var ennemies = [];
var ennemiesToSpawn = 9;
var ennemiesLeft = ennemiesToSpawn;
var ennemiesAreSafe = true;

var hitPoints =5;
var hitPointsString = "HP: ";
var hitPointsText;

var score = 0;
var scoreString = "Score: ";
var scoreText;

var introText;


var gameStarted;

var gameFinish;

var gameplay = new Phaser.Class({
    
    Extends: Phaser.Scene,
    
    initialize: function gameplay(){
        Phaser.Scene.call(this, { key: "gameplay" });
    },

    preload: function()
    {
        this.load.image(
            "sky","sky.png"
          );
        
          this.load.spritesheet(
            "dude", "assets/dude.png",
            {
                frameWidth: 32,
                frameHeight: 48
            }
        );
       
            this.load.spritesheet(
                "baddie", "assets/baddie.png",
                {
                    frameWidth: 32,
                    frameHeight: 32
                }
        );
          
    },

    create: function()
    {
         this.physics.add.sprite(config.width / 2, config.height / 2, "sky");
         
         player = this.physics.add.sprite(32, config.height - 150, "dude");


         this.anims.create({
             key: "left",
             frames: this.anims.generateFrameNumbers("dude", {start: 0, end: 0}),
             repeat: -1
         });
         this.anims.create({
            key: "down",
            frames: this.anims.generateFrameNumbers("dude", {start: 1, end: 1}),
            repeat: -1
        });
        this.anims.create({
            key: "right",
            frames: this.anims.generateFrameNumbers("dude", {start: 2, end: 2}),
            repeat: -1
        });
        this.anims.create({
            key: "up",
            frames: this.anims.generateFrameNumbers("dude", {start: 3, end: 3}),
            repeat: -1
        });

        player.setCollideWorldBounds(true);

        cursors = this.input.keyboard.createCursorKeys();

        ennemiesAreSafe = false;
        
        ennemies = this.physics.add.staticGroup({
            key: "baddie",
            repeat: ennemiesToSpawn
        });

        ennemies.children.iterate(function(enemy) {
            enemy.setX(Phaser.Math.FloatBetween(32, config.width - 32));
            enemy.setY(Phaser.Math.FloatBetween(32, config.height -32));

            if(enemy.x > config.width - 32) {
                enemy.setX(config.width- 48);
            }
            else if (enemy.x < 32)
                enemy.setX(48);

            if (enemy.y > config.height - 32) {
                enemy.setY(config.height - 48);
            }
            else if (enemy.y < 32){
                enemy.setY(48);
            }
            if (enemy.x == 32 && enemy.y == config.height - 150){
                enemy.SetX(48);
            }
        });

        this.anims.create({
            key: "safe",
            frames: this.anims.generateFrameNumbers("baddie", {start: 1, end: 1})
        });

        this.anims.create({
            key:"unsafe",
            frames: this.anims.generateFrameNumbers("baddie", {start: 0, end: 0})
        });

        ennemies.refresh();

        scoreText = this.add.text(32, 24, scoreString + score);
        scoreText.visible = false;

        hitPointsText = this.add.text(32, 64, hitPointsString + hitPoints);
        hitPointsText.visible = false;

        introText = this.add.text(
            32,
            24,
            "clear all baddies when green!"
        );

        this.input.on("pointerdown", function()
        {
            if(!gameStarted) {
                startGame();
            }
        });
        
        timedEvent = this.time.addEvent({
            delay: 1000,
            callback: switchEnemyState,
            callbackScope: this,
            loop: true
        });

        this.physics.add.overlap(player, ennemies, collideWithEnemy, null, this);
    },
    
    update: function(){
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
       
        scoreText.setText(scoreString + score);
        hitPointsText.setText(hitPointsString + hitPoints);

    }

});

function switchEnemyState() {
    if (gameStarted && !gameFinish) {
        if (ennemiesAreSafe == false) {
            ennemiesAreSafe = true;
            ennemies.children.iterate(function(enemy)
            {
                enemy.anims.play("safe");
            });
        } else {
            ennemiesAreSafe = false;
            ennemies.children.iterate(function(enemy)
            {
                enemy.anims.play("unsafe");
            });
        }
    }
}

function collideWithEnemy(player, enemy)
{
    if (gameStarted && !gameFinish) {
        if (ennemiesAreSafe == false) {
            hitPoints--;
        } else {
            score++;
        }
            enemy.disableBody(true, true);
            ennemiesLeft--;

            if (hitPoints <= 0){
                Killgame();
                introText.setText("game over");
            }
            else if (hitPoints > 0 && ennemiesLeft < 0){
                Killgame();
                introText.setText("you won");
            }
    }
}



function startGame() {
    introText.visible = false;
    scoreText.visible = true;
    hitPointsText.visible= true;
    gameStarted = true;
    gameFinish = false;
}
function Killgame() {
    gameFinish = true;
    player.setVelocity(0, 0);
    introText.visible = true;
    scoreText.visible = false;
    hitPointsText.visible = false;
}

var config = {
    type: Phaser.AUTO,
    width: 700,
    height: 600,
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
