import {Game} from './game.js'
export class GameJsonDeserializer {
    constructor(game) {
        this.game = game;
    }

    deserialize() {
        let storedData = JSON.parse(this.game);//turn =2
        let game = new Game(storedData.player1, storedData.player2); //turn = 1

        //loop of objs, loop of arrays, if(el === 1 || 2) playInColumn(i),call playInColumn on the bottom elemnet that = 1,
        for (let i = 0; i < storedData.columns.length; i++) {
            for (let j = 5; j >=0; j--) {
                let square = storedData.columns[i].tokens[j];
                if (square === game.turn) { //square 2 = game.turn 1?
                    game.playInColumn(i);
                } else {
                    game.turn = square; // game.turn = square ====> game.turn=2
                    game.playInColumn(i);
                }
            }
        }
        game.turn = storedData.turn; //saved turn and assign it to the game turn
        return game;
    }
}
