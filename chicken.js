class Chicken {
    constructor(game) {
        this.game = game;

        // walking
        this.animations = [];
        this.animations[0] = new Animator(ASSET_MANAGER.getAsset("./chicken_spritesheet.png"), 0, 0, 10, 11, 2, 0.3, 5);
        this.animations[1] = new Animator(ASSET_MANAGER.getAsset("./chicken_spritesheet.png"), 0, 11, 10, 11, 2, 0.3, 5);
        
        // 0 is right, 1 is left
        this.walking = 1;
        this.cluckCounter = 0;

        this.x = 700;
        this.y = 902;
        this.speed = 230;
    };

    update() {
        if (this.cluckCounter == 500) {
            console.log(this.cluckCounter);
            ASSET_MANAGER.getAsset("./cluck.mp3").muted = false;
            ASSET_MANAGER.getAsset("./cluck.mp3").play();
        } else if (this.cluckCounter == 538) {
            this.cluckCounter = 0;
            ASSET_MANAGER.getAsset("./cluck.mp3").pause();
            // ASSET_MANAGER.getAsset("./cluck.mp3").currentTime = 0;
        }
        if (this.x >= -200 && this.x <= -150) {
            this.walking = 0;
        }
        if (this.x >= 1700 && this.x <= 1725) {
            this.walking = 1;
        }

        this.walking == 0 ? this.x += this.speed * this.game.clockTick : 
                            this.x -= this.speed * this.game.clockTick;
        this.cluckCounter++;
        
    };
    
    draw (ctx) {
        this.animations[this.walking].drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}