/**
 * game, scene, gameObject data managing. (setDataEnabled())
 * merge to parent, events, events on key only?
 */

import * as Phaser from 'phaser';

export class DataManagerScene extends Phaser.Scene {
  countText: Phaser.GameObjects.Text;
  buttonRect: Phaser.GameObjects.Rectangle;
  gemImage;

  constructor() {
    super('data-manager-scene');
  }

  preload() {
    this.data.set('count', 0);
    // this.data.set({ count: 0, test: 2 }); why isn't this working in intellisense?
  }

  create() {
    this.countText = this.add.text(10,10, 'count');
    this.countText.setDataEnabled();
    this.data.events.on('changedata', (...data) => this.onChangeData(data));

    this.buttonRect = this.add.rectangle(20, 100, 120, 80, 0x0000a2);
    this.buttonRect.setInteractive();
    this.buttonRect.on('pointerup', (pointer) => this.onButtonClick(pointer)); 
    // bind this or put in closure!
  }

  update(timer, delta) {
    this.countText.setText('count: ' + this.data.get('count'));
    // this.countText.setState; // integer mapped to constant describing state
    // this.countText.setData; // data manager
  }

  onButtonClick(pointer) {
    this.buttonRect.fillColor = 0x0000b2;
    const lastCount = this.data.get('count') | 0;
    this.data.set('count', lastCount + 1);
  }

  onChangeData(data) {
    
    console.log('on change data', data[1], data[2], data[3]);
  }
}