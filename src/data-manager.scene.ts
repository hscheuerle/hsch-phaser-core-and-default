/**
 * game, scene, gameObject data managing. (setDataEnabled())
 * merge to parent, events, events on key only?
 */

import * as Phaser from 'phaser';

export class DataManagerScene extends Phaser.Scene {
  constructor() {
    super('data-manager-scene');
  }

  preload() {
    this.data.set('count', 0);
    // this.data.set({ count: 0, test: 2 }); why isn't this working in intellisense?
  }

  create() {

  }

  update() {

  }
}