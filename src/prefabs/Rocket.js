// Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
      super(scene, x, y, texture, frame);
  
      // add object to existing scene
      scene.add.existing(this);
      this.isFiring = false;
      this.moveSpeed =  2;
    }

 /*   update() {
        if(!this.isFiring) {
            if(keyLEFT.isDown && this.x >=)
        }
    }
    
*/

  }