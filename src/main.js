let config = {
  type: Phaser.AUTO,
  width: 640,
  height: 480,
  scene: [Menu, Play]
}

//reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;
let keyA, keyD, keyW;

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

/*
Name: Omar Bahlool
Project name: Rocket Petrol: Medievel edition
04/18/2022
It took me approximetely 8-10 hours for to complete everything

Point Breakdown:
Add your own (copyright-free) background music to the Play scene (5)
Allow the player to control the Rocket after it's fired (5)
Implement a simultaneous two-player mode (30)
Redesign the game's artwork, UI, and sound to change its theme/aesthetic (to something other than sci-fi) (60)
*/