import { Player } from '@/components/Kash';
import { BaseScene } from '@/scenes/BaseScene';

export class GameScene extends BaseScene {
	player: Player;

	constructor() {
		super({ key: 'GameScene' });
	}

	preload(): void {}

	create(): void {
		/*
		this.cameras.main.setBackgroundColor(0xff0000);
		const map = this.add.tilemap('tilemap');
		map.addTilesetImage('RougelikeDungeonPack', 'RougelikeDungeonPack');
		map.addTilesetImage('RougelikeInteriorPack', 'RougelikeInteriorPack');
		const layer = map.createLayer('Floor', [
			'RougelikeDungeonPack',
			'RougelikeInteriorPack',
		]);
		const laer = map.createLayer('Walls', [
			'RougelikeDungeonPack',
			'RougelikeInteriorPack',
		]);

		this.textures
			.get('RougelikeDungeonPack')
			.setFilter(Phaser.Textures.FilterMode.NEAREST);
		this.textures
			.get('RougelikeInteriorPack')
			.setFilter(Phaser.Textures.FilterMode.NEAREST);

		layer!.scale = 4;
		laer!.scale = 4;
		*/
		this.player = new Player(this, this.CX, this.CY + 100);
	}
}
