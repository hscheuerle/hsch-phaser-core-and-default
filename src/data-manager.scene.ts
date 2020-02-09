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
    this.data.events.on('changedata', (...data) => this.onChangeData(data));
    this.data.events.on('setdata', (...data) => this.onChangeData(data));
    this.data.set('count', 0);
    this.data.set('bonus', 5);
  }

  create() {
    this.countText = this.add.text(10,10, 'count');
    this.countText.setDataEnabled();
    this.countText.on('changedata', (...data) => this.onChangeData(data))

    this.buttonRect = this.add.rectangle(20, 100, 120, 80, 0x0000a2);
    this.buttonRect.setInteractive();
    // remember to use closure, bind this, or pass 'this' as 3rd param
    this.buttonRect.on('pointerup', (pointer) => this.onButtonClick(pointer)); 
  }

  update(timer, delta) {
    this.countText.setText('count: ' + this.data.get('count'));
    // this.countText.setState; // integer mapped to constant describing state
    // this.countText.setData; // data manager
  }

  onButtonClick(pointer) {
    this.buttonRect.fillColor = 0x0000b2;
    const lastCount = this.data.get('count') | 0;
    const lastBonus = this.data.get('bonus') | 0;
    this.data.set('count', lastCount + 1);
    this.data.set('bonus', lastBonus + 1);
    // setData same as data.set???
    this.countText.setData('count2', 2 * (lastCount + 1));
    // even with this typing being broken, this just calls set for each key triggering the callback multiple times
    // this.data.set({'count': lastCount + 1, 'bonus': lastCount + 5}); 
  }

  onChangeData(data) {
    // called 
    console.log(Object.keys(data[0]), data[1], data[2], data[3]);
  }
}