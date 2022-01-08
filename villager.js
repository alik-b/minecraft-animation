class Villager {
    constructor(game) {
        this.game = game;

        // walking
        this.animations = [];
        this.animations[0] = new Animator(ASSET_MANAGER.getAsset("./human_spritesheet.png"), 29, 143, 12, 15, 4, 0.4, 8);
        this.animations[1] = new Animator(ASSET_MANAGER.getAsset("./human_spritesheet.png"), 29, 159, 12, 15, 4, 0.4, 8);
        
        // 0 is right, 1 is left
        this.walking = 0;
        this.huhCounter = 0;

        this.x = -400;
        this.y = 835;
        this.speed = 150;
    };

    update() {
        if (this.huhCounter == 200) {
            console.log(this.huhCounter);
            ASSET_MANAGER.getAsset("./huh.mp3").muted = false;
            ASSET_MANAGER.getAsset("./huh.mp3").play();
        } else if (this.huhCounter == 238) {
            this.huhCounter = 0;
            ASSET_MANAGER.getAsset("./huh.mp3").pause();
        }

        if (this.x >= -425 && this.x <= -375) {
            this.walking = 0;
        }
        if (this.x >= 1700 && this.x <= 1725) {
            this.walking = 1;
        }

        this.walking == 0 ? this.x += this.speed * this.game.clockTick : 
                            this.x -= this.speed * this.game.clockTick;
        this.huhCounter++;
        
    };
    
    draw (ctx) {
        this.animations[this.walking].drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}