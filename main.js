const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./background.gif");
ASSET_MANAGER.queueDownload("./steve_spritesheet.png");
ASSET_MANAGER.queueDownload("./minecraft.mp3");
ASSET_MANAGER.queueDownload("./footsteps.mp3");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	gameEngine.addEntity(new Steve(gameEngine));

	document.body.addEventListener("mousemove", function () {
		ASSET_MANAGER.getAsset("./minecraft.mp3").play()
	});
	//ASSET_MANAGER.getAsset("./minecraft.mp3").play();

	gameEngine.init(ctx);

	gameEngine.start();
});
