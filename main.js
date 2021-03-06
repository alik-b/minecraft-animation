const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./background.gif");
ASSET_MANAGER.queueDownload("./beehive.png");
ASSET_MANAGER.queueDownload("./flower_spritesheet.png");
ASSET_MANAGER.queueDownload("./human_spritesheet.png");
ASSET_MANAGER.queueDownload("./chicken_spritesheet.png");
ASSET_MANAGER.queueDownload("./bee_spritesheet.png");
ASSET_MANAGER.queueDownload("./minecraft.mp3");
ASSET_MANAGER.queueDownload("./footsteps.mp3");
ASSET_MANAGER.queueDownload("./cluck.mp3");
ASSET_MANAGER.queueDownload("./huh.mp3");
ASSET_MANAGER.queueDownload("./buzz.mp3");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	gameEngine.addEntity(new Steve(gameEngine));
	gameEngine.addEntity(new Chicken(gameEngine));
	gameEngine.addEntity(new Villager(gameEngine));
	gameEngine.addEntity(new Bee(gameEngine));

	document.body.addEventListener("mousemove", function () {
		ASSET_MANAGER.getAsset("./minecraft.mp3").muted = false;
		ASSET_MANAGER.getAsset("./minecraft.mp3").volume = 0.6;
		ASSET_MANAGER.getAsset("./minecraft.mp3").play();
		ASSET_MANAGER.getAsset("./buzz.mp3").muted = false;
		ASSET_MANAGER.getAsset("./buzz.mp3").volume = 0.1;
        ASSET_MANAGER.getAsset("./buzz.mp3").play();
	});

	gameEngine.init(ctx);

	gameEngine.start();
});
