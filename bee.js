class Bee {
    constructor(game) {
        this.game = game;

        // walking
        this.animations = [];
        this.animations[0] = new Animator(ASSET_MANAGER.getAsset("./bee_spritesheet.png"), 0, 0, 8, 8, 1, 0.3, 8);
        this.animations[1] = new Animator(ASSET_MANAGER.getAsset("./bee_spritesheet.png"), 0, 11, 8, 8, 1, 0.3, 8);
        
        // 0 is right, 1 is left
        this.walking = 0;
        // 0 is down, 1 is up
        this.upAndDown = 0;

        this.x = 1200;
        this.y = 700;
        this.speed = 200;
    };

    update() {
        if (this.x >= -200 && this.x <= -150) {
            this.walking = 0;
        }
        if (this.x >= 1700 && this.x <= 1725) {
            this.walking = 1;
        }
        
        if (this.y >= 700 && this.y <= 725) {
            this.upAndDown = 0;
        }
        if (this.y >= 650 && this.y <= 675) {
            this.upAndDown = 1;
        }
        
        this.upAndDown == 0 ? this.y-- : this.y++;
        this.walking == 0 ? this.x += this.speed * this.game.clockTick : 
                            this.x -= this.speed * this.game.clockTick;
        
    };
    
    draw (ctx) {
        this.animations[this.walking].drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}