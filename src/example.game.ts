import * as Phaser from 'phaser';

const gameConfig: Phaser.Types.Core.GameConfig = {
  height: 700,
  width: 350,
  backgroundColor: '#333333',
  parent: 'app',
};

export class ExampleGame extends Phaser.Game {
  constructor() {
    super(gameConfig);
  }
}