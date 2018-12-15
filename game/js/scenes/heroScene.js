class HeroScene extends Phaser.Scene {

    constructor()
    {
        super({ key:'heroScene', active: true});
    }

    preload()
    {
        this.load.spritesheet('hero', 'assets/hero/rogue_like_run.png', { frameWidth: 100, frameHeight: 100 });
    }

    create()
    {
        var config = {
            key: 'walk',
            frames: this.anims.generateFrameNumbers('hero'),
            frameRate: 6,
            yoyo: false,
            repeat: -1
        };
    
        var anim = this.anims.create(config);
        var sprite = this.add.sprite(400, 300, 'hero').setScale(2);
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

};

export default HeroScene;

