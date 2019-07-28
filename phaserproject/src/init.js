const config = {
    width: 453,
    height: 254,
    parent: "container",
    type: Phaser.AUTO,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
}

var game = new Phaser.Game(config);

function preload(){
    this.load.image('sky', './assets/sky.png');
    this.load.image('trees', './assets/trees.png');
    this.load.image('mountains', './assets/mountains.png');
    this.load.image('clouds', './assets/clouds.png');
    console.log("PRELOAD");
}

function create(){
    this.sky = this.add.image(game.canvas.width/2, game.canvas.height/2, 'sky');
    this.clouds = this.add.tileSprite(game.canvas.width/2, game.canvas.height/2, 453, 254, 'clouds');
    this.mountains = this.add.tileSprite(game.canvas.width/2, game.canvas.height/2, 453, 254, 'mountains');
    this.trees = this.add.tileSprite(game.canvas.width/2, game.canvas.height/2, 453, 254, 'trees');
    console.log("CREATE");
}

function update(time, delta){
    this.clouds.tilePositionX += 0.02;
    this.mountains.tilePositionX += 0.03;
    this.trees.tilePositionX += 0.05;
    //console.log("UPDATE");
}