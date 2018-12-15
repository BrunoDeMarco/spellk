class MenuScene extends Phaser.Scene {

    constructor()
    {
        super({ key:'menuScene', active: true});
    }

    preload()
    {
        this.load.image('menu_background', '../assets/menu_background.png');
    }

    create()
    {
        this.add.sprite(300, 200, 'menu_background');
        this.input.once('pointerdown', function()
        {
            console.log('change scene');
            this.scene.start('mainScene');
        }, this);
    }

};

export default MenuScene;