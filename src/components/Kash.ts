import { GameScene } from '@/scenes/GameScene';

const KeysConst = {
	up: 'W',
	down: 'S',
	left: 'A',
	right: 'D',
} as const;
type Keys = { [K in keyof typeof KeysConst]: boolean };

function CreateKeysboard<T extends Record<string, string>>(
	scene: GameScene,
	keys: T
) {
	return scene.input.keyboard!.addKeys(keys) as { [K in keyof T]: boolean };
}

export class Player extends Phaser.GameObjects.Container {
	public scene: GameScene;
	public keyboard: Keys;

	// Sprites
	private sprite: Phaser.GameObjects.Sprite;

	constructor(scene: GameScene, x: number, y: number) {
		super(scene);
		scene.add.existing(this);
		this.scene = scene;

		this.sprite = this.scene.add.sprite(x, y, 'fox');
		this.sprite.setOrigin(0.5, 1);

		this.keyboard = CreateKeysboard(this.scene, KeysConst);
	}
}
