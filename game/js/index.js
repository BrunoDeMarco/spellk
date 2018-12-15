import Phaser from "phaser";

import MenuScene from "./scenes/menuScene";
import MainScene from "./scenes/mainScene";
import HeroScene from "./scenes/heroScene";
import EndScene from "./scenes/endScene";

const config = {
  type: Phaser.AUTO,
  width: 480,
  height: 480,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 }
    }
  },
  scene: [ MainScene ]
};

export default new Phaser.Game(config);
