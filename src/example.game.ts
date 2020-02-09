import * as Phaser from 'phaser';
// import { DataManagerScene } from './data-manager.scene';
import { DebugScene } from './debug.scene';
import { MainScene } from './main.scene';

const gameConfig = {
  height: 700,
  width: 350,
  pixelArt: true,
  backgroundColor: '#333333',
  parent: 'app',
  scene: [ MainScene, DebugScene ],
};

export class ExampleGame extends Phaser.Game {
  constructor() {
    super(gameConfig);
  }
}