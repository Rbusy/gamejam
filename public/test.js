var config = {
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        // update: update
    }
};

var game = new Phaser.Game(config);

var player;
var ennemies = [];
var ennemiesToSpawn = 10;
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


function preload()
{
    this.load.image(
        "sky",
        "sky.png"
      );
}

function create()
{
   
   this.add.sprite(config.width / 2, config.height / 2, "sky")
}

// var gameplay = new Phaser.Class({
    
//     Extends: Phaser.Scene,
    
//     initialize: function gameplay(){
//         Phaser.Scene.call(this, { key: "gameplay" });
//     },

//     preload: function()
//     {
//         this.load.image(
//             "sky",
//             "sky.png"
//           );
          
//     },

//     create: function()
//     {
//         // this.physics.add.sprite(config.width / 2, config.height / 2, "sky");
//         this.add.image(0, 0, 'sky')
//     }

// });