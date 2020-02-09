
export class DebugScene extends Phaser.Scene {
  // data passed gets emitted in this ready, wake, or resume events.
  constructor() {
    super('debug-scene');
  }

  text;

  preload() {

  }

  create() {




    this.text = this.add.text(0, 0, [
      'frames',
      'timer',
      'delta'
    ]);
  }

  update(timer, delta) {

  }
}