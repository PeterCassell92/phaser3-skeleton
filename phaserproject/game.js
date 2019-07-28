var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};
var score = 0;
var scoreText;

var game = new Phaser.Game(config);

function preload ()
{
    game.load.image('sky', 'assets/sky.png');
    game.load.image('trees', 'assets/trees.png');
    game.load.image('mountain', 'assets/mountain.png');
    game.load.image('clouds', 'assets/clouds.png');
    //game.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
}

function create ()
{
    // game.add.image(226, 127, 'sky');
    // game.add.image(226, 127, 'clouds');
    // game.add.image(226, 127, 'mountain');
    // game.add.image(226, 127, 'trees');

    cursors = game.input.keyboard.createCursorKeys();

    var h = game.textures.get('sky').getSourceImage().height;
    var w = game.textures.get('sky').getSourceImage().width;

    console.log(h);
    console.log(w);
    //scoreText = this.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

    this.sky1 = this.add.tileSprite(bkgrdwidth/2, 
        bkgrdheight/2, 
        453, 
        254, 
        'sky'
    );

    this.clouds2 = this.add.tileSprite(bkgrdwidth/2, 
        bkgrdheight/2,
        453,
        254, 
        'clouds'
    );

    this.mountain3 = this.add.tileSprite(bkgrdwidth/2, 
        bkgrdheight/2,
        453,
        254, 
        'mountain'
    );
    this.trees4 = this.add.tileSprite(bkgrdwidth/2, 
        bkgrdheight/2,
        453,
        254,
        'trees'
    );        

};

function update ()
{
}