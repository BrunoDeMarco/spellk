class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: "mainScene", active: true });
  }

  preload() {
    this.load.image("tile", "assets/scene/tile.png");
    this.load.image("tile_interno", "assets/scene/tile_interno.png");
    this.load.image("tile_random", "assets/scene/tile_random.png");

    // this.load.tilemapCSV("map", "assets/tileset.csv");
  }

  create() {
    // var map = this.make.tilemap({ key: "tiles", tileWidth: 16, tileHeight: 16 });
    // var tileset = map.addTilesetImage("tiles");

    let colunas = 5;
    let linhas = 5;

    for (var i = -1; i < colunas + 1; i++)
    {

      for (var j = -1; j < linhas + 1; j++)
      {
        if (i == -1 || i == colunas || j == -1 || j == linhas)
        {
          this.add.sprite(i * 64 + 96, j * 64 + 96, "tile");
        }
        else
        {
          this.add.sprite(i * 64 + 96, j * 64 + 96, "tile_interno");
        }
          
      }
      
    }

    var grid = [];

    for (let i = 1; i <= colunas - 1; i++)
    {
      for (let j = 1; j <= linhas - 1; j++)
      {
        grid.push([i,j]);
      }
    }

    let random_count = Math.floor(Math.random() * 10);

    for (let i = 0; i < random_count; i++)
    {
      let random = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
      this.add.sprite(grid[random][0] * 64 + 96, grid[random][1] * 64 + 96, "tile_random");
    }
    

    // map.setCollisionBetween(200, 400);
    // var tileset = map.addTilesetImage("tiles");

    // var layer = map.createStaticLayer(0, tileset, 0, 320);
  }
}

export default MainScene;
