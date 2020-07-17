export class GameJsonSerializer {
    constructor(game) {
        this.game = game;
    }

    serialize() {
        return JSON.stringify(this.game);
    }
}
