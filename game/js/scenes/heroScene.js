class HeroScene extends Phaser.Scene {

    constructor()
    {
        super({ key:'heroScene', active: true});
        this.player = null;
    }
    
    preload()
    {
        this.load.spritesheet('hero', 'assets/hero/rogue_like_run.png', { frameWidth: 100, frameHeight: 100 });
        this.load.spritesheet('hero_left', 'assets/hero/rogue_like_run_left.png', { frameWidth: 100, frameHeight: 100 });
    }

    create()
    {    
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('hero'),
            frameRate: 6,
            yoyo: false,
            repeat: -1
        });
    
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('hero_left'),
            frameRate: 6,
            yoyo: false,
            repeat: -1
        }); 
    
        this.player = this.physics.add.sprite(500, 100, 'hero').setScale(2);
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);
        
        this.input.keyboard.on('keydown_RIGHT', function (event) {
            //sprite.anims.play('walk');
        });
    
        this.input.keyboard.on('keydown_P', function (event) {
            // if (sprite.anims.isPaused)
            // {
            //     sprite.anims.resume();
            // }
            // else
            // {
            //     sprite.anims.pause();
            // }
        });
    }

    update(){
        var cursors = this.input.keyboard.createCursorKeys();
        if (cursors.left.isDown)
        {
            this.player.setVelocityX(-160);
            this.player.anims.play('left', true);
        }
        else if (cursors.right.isDown)
        {
            this.player.setVelocityX(160);
            this.player.anims.play('right', true);
        }
        else
        {
            this.player.setVelocityX(0);
            //player.anims.play('turn');
        }
    
        if (cursors.up.isDown)
        {
            this.player.setVelocityY(-330);
        }
    }
};

export default HeroScene;

