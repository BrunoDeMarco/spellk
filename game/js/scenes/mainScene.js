class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: "mainScene", active: true });
  }

  preload() {
    this.load.image("tiles", "assets/tileset.png");
    this.load.tilemapCSV("map", "assets/tileset.csv");
  }

  create() {
    var map = this.make.tilemap({ key: "map", tileWidth: 16, tileHeight: 16 });
    var tileset = map.addTilesetImage("tiles");

    map.setCollisionBetween(200, 400);
    var tileset = map.addTilesetImage("tiles");

    var layer = map.createStaticLayer(0, tileset, 0, 320);
  }
}

export default MainScene;
