import * as Phaser from 'phaser';
import { DataManagerScene } from './data-manager.scene';

const gameConfig = {
  height: 700,
  width: 350,
  pixelArt: true,
  backgroundColor: '#333333',
  parent: 'app',
  scene: [ DataManagerScene ],
};

export class ExampleGame extends Phaser.Game {
  constructor() {
    super(gameConfig);
  }
}