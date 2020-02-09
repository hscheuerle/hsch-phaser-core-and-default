export class MainScene extends Phaser.Scene {
  constructor() {
    super('main-scene');
  }

  preload() {

  }

  create() {
    // this.scene.start() this would shutdown scene
    this.scene.run('debug-scene', {}) 
    // try windowing scene in second camera w/ viewport?
    // this.scene.add('debug-scene', DebugScene, true, { x: 400, y: 300 }); // if not already in config?

    

  }

  update(timer, delta) {

  }
}