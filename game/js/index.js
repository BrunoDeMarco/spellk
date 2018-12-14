const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};

const game = new Phaser.Game(config);

function preload() {
    this.load.image('tileset', 'assets/tileset.png');
}

function create() {
    const matrix = [ range(20, 0), range(20, 0), range(20, 1), range(20, 0), range(20, 0) ];
    this.add.image(400, 300, 'tileset');
}
