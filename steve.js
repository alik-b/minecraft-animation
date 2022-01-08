class Steve {
    constructor(game) {
        this.game = game;

        // walking
        this.animations = [];
        this.animations[0] = new Animator(ASSET_MANAGER.getAsset("./steve_spritesheet.png"), 25, 103, 23, 17, 4, 0.3);
        this.animations[1] = new Animator(ASSET_MANAGER.getAsset("./steve_spritesheet.png"), 25, 121, 23, 18, 4, 0.3);
        
        // 0 is right, 1 is left
        this.walking = 0;

        document.body.addEventListener("mousemove", function () {
            ASSET_MANAGER.getAsset("./footsteps.mp3").muted = false;
            ASSET_MANAGER.getAsset("./footsteps.mp3").volume = 0.2;
            ASSET_MANAGER.getAsset("./footsteps.mp3").play();
        });

        this.x = -175;
        this.y = 820;
        this.speed = 200;
    };

    update() {
        if (this.x >= -200 && this.x <= -150) {
            this.walking = 0;
        }
        if (this.x >= 1700 && this.x <= 1725) {
            this.walking = 1;
        }

        this.walking == 0 ? this.x += this.speed * this.game.clockTick : 
                            this.x -= this.speed * this.game.clockTick;
        
    };
    
    draw (ctx) {
        this.animations[this.walking].drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}