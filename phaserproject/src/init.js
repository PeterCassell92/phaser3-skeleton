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
    console.log("PRELOAD");
}

function create(){
    console.log("CREATE");
}

function update(){
    //console.log("UPDATE");
}