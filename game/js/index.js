import Phaser from "phaser";

import MenuScene from "./scenes/menuScene";
import MainScene from "./scenes/mainScene";
import HeroScene from "./scenes/heroScene";
import EndScene from "./scenes/endScene";

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
  },
  scene: [ MenuScene, MainScene, EndScene, HeroScene ]
};

export default new Phaser.Game(config);
