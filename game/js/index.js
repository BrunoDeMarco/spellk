import Phaser from "phaser";

var MenuScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function MenuScene ()
    {
        Phaser.Scene.call(this, { key: 'menuScene' });
    },

    preload: function ()
    {
        this.load.image('menu_background', '../assets/menu_background.png');
    },

    create: function ()
    {
        this.add.sprite(300, 200, 'menu_background');
        this.input.once('pointerdown', function()
        {
            console.log('change scene');
            this.scene.start('mainScene');
        }, this);
    }

});

var MainScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function MainScene ()
    {
        Phaser.Scene.call(this, { key: 'mainScene' });
    },

    preload: function ()
    {
        console.log('preload');
    },

    create: function ()
    {
        console.log('create');
    }

});

var EndScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function EndScene ()
    {
        Phaser.Scene.call(this, { key: 'endScene' });
    },

    preload: function ()
    {
        this.load.image('end_game', '../assets/end_game.png');
    },

    create: function ()
    {
        this.add.sprite(300, 200, 'end_game');
        this.input.once('pointerdown', function()
        {
            console.log('change scene');
            this.scene.start('endScene');
        }, this);
    }

});

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 }
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
  // scene: [ MenuScene, MainScene, EndScene ]
};

var anim;
var sprite;
var progress;
var frameView;

function preload() {
    this.load.image('tiles', 'assets/tileset.png');
    this.load.tilemapCSV('map', 'assets/tileset.csv');

    this.load.spritesheet('hero', 'assets/hero/rogue_like_run.png', { frameWidth: 100, frameHeight: 100 });
}

function create() {

    var map = this.make.tilemap({ key: 'map', tileWidth: 16, tileHeight: 16 });
    var tileset = map.addTilesetImage('tiles');

    var layer = map.createStaticLayer(0, tileset, 0, 320);

    var config = {
        key: 'walk',
        frames: this.anims.generateFrameNumbers('hero'),
        frameRate: 6,
        yoyo: false,
        repeat: -1
    };

    anim = this.anims.create(config);
    sprite = this.add.sprite(400, 300, 'hero').setScale(2);
    sprite.anims.load('walk');
    
    this.input.keyboard.on('keydown_RIGHT', function (event) {
        sprite.anims.play('walk');
    });

    this.input.keyboard.on('keydown_P', function (event) {
        if (sprite.anims.isPaused)
        {
            sprite.anims.resume();
        }
        else
        {
            sprite.anims.pause();
        }
    });
}

function update() {}

export default new Phaser.Game(config);
