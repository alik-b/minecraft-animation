class AssetManager {
    constructor() {
        this.successCount = 0;
        this.errorCount = 0;
        this.cache = [];
        this.downloadQueue = [];
    };

    queueDownload(path) {
        console.log("Queueing " + path);
        this.downloadQueue.push(path);
    };

    isDone() {
        return this.downloadQueue.length === this.successCount + this.errorCount;
    };

    downloadAll(callback) {
        if (this.downloadQueue.length === 0) setTimeout(callback, 10);
        for (let i = 0; i < this.downloadQueue.length; i++) {
            let path = this.downloadQueue[i];
            let ext = path.substring(path.length - 3);

            switch (ext) {
                case 'gif':
                case 'png':
                    const img = new Image();
                    console.log(path);

                    img.addEventListener("load", () => {
                        console.log("Loaded " + img.src);
                        this.successCount++;
                        if (this.isDone()) callback();
                    });

                    img.addEventListener("error", () => {
                        console.log("Error loading " + img.src);
                        this.errorCount++;
                        if (this.isDone()) callback();
                    });

                    img.src = path;
                    this.cache[path] = img;
                    break;
                case 'mp3':
                    let aud = new Audio();
                    aud.addEventListener("loadeddata", () => {
                        console.log("Loaded " + this.src);
                        this.errorCount++;
                        if (this.isDone()) callback();
                    });

                    aud.addEventListener("error", () => {
                        console.log("Error loading " + this.src);
                        this.errorCount++;
                        if (this.isDone()) callback();
                    });

                    aud.addEventListener("ended", () => {
                        //aud.pause();
                        aud.currentTime = 0;
                        aud.play();
                    });

                    aud.src = path;
                    aud.load();

                    this.cache[path] = aud;
                    break;
            }
        }
    };

    getAsset(path) {
        return this.cache[path];
    };
};

