class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: "mainScene" });
    this.player = null;
  }

  preload() {
    this.load.image('ground', 'assets/scene/ground.png');
    this.load.spritesheet('hero', 'assets/hero/rogue_like_run.png', {
       frameWidth: 32,
       frameHeight: 48
     });
  }

  create() {

    const ground = this.physics.add.staticGroup();
    
    ground.create(100, 300, 'ground');
    ground.create(30, 200, 'ground');
    ground.create(100, 300, 'ground');

    this.player = this.physics.add.sprite(100, 100, 'hero').setScale(1);
    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('hero', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'turn',
      frames: [ { key: 'hero', frame: 4 } ],
      frameRate: 20
    });
  
    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('hero', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
    });

    this.physics.add.collider(this.player, ground);
  }

  update() {

    const controller = this.input.keyboard.createCursorKeys();

    if (controller.left.isDown)
    {
      this.player.setVelocityX(-160);
      this.player.anims.play('left', true);
    }
    else if (controller.right.isDown)
    {
      this.player.setVelocityX(160);
      this.player.anims.play('right', true);
    }
    else
    {
      this.player.setVelocityX(0);
      this.player.anims.play('turn');
    }

    if (controller.up.isDown && this.player.body.touching.down)
    {
      this.player.setVelocityY(-230);
    }

  }
}

export default MainScene;
