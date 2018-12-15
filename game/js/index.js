import Phaser from "phaser";

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
};

var anim;
var sprite;
var progress;
var frameView;

function preload() {
  //this.load.image('tileset', 'assets/tileset.png');
  this.load.spritesheet("hero", "assets/hero/rogue_like_run.png", {
    frameWidth: 100,
    frameHeight: 100
  });
}

function create() {
  var config = {
    key: "walk",
    frames: this.anims.generateFrameNumbers("hero"),
    frameRate: 6,
    yoyo: false,
    repeat: -1
  };

  anim = this.anims.create(config);
  sprite = this.add.sprite(400, 300, "hero").setScale(2);
  sprite.anims.load("walk");

  this.input.keyboard.on("keydown_RIGHT", function(event) {
    sprite.anims.play("walk");
  });

  this.input.keyboard.on("keydown_P", function(event) {
    if (sprite.anims.isPaused) {
      sprite.anims.resume();
    } else {
      sprite.anims.pause();
    }
  });
}

function update() {}

export default new Phaser.Game(config);
