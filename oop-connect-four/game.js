import {Column} from './column.js';
import {ColumnWinInspector} from './column-win-inspector.js';
import {RowWinInspector} from './row-win-inspector.js'
import {DiagonalWinInspector} from './diagonal-win-inspector.js'
import {GameJsonSerializer} from './game-json-serializer.js'
import {GameJsonDeserializer} from './game-json-deserializer.js'

export class Game{
    constructor(player1, player2){
        this.player1 = player1;
        this.player2 = player2;
        this.turn = 1;
        this.columns = [];
        for (let i = 0; i <7; i++){
            this.columns.push(new Column());
        }
        this.winnerNum = 0;
    }
    playInColumn(colIndex) {
        this.columns[colIndex].add(this.turn);

        if (this.winnerNum === 0) {
            this.checkForTie();
            this.checkForColumnWin();
            this.checkForRowWin();
            this.checkForDiagonalWin();
        }
        if (this.turn === 1) {
            this.turn = 2;
        } else {
            this.turn = 1;
        }
    }
    getName() {
      if(this.winnerNum===3){
        return `${this.player1} ties with ${this.player2}`;
      } else if (this.winnerNum === 1) {
        return `${this.player1} wins!`;
      } else if (this.winnerNum === 2) {
        return `${this.player2} wins!`;
      }
        return `${this.player1} vs. ${this.player2}`;
    }
    getTokenAt(rowIndex, colIndex){
        return this.columns[colIndex].getTokenAt(rowIndex);
    }

    isColumnFull(colIndex){
        if (this.winnerNum === 1 || this.winnerNum === 2) {
            this.getName();
            return true;
        }
        return this.columns[colIndex].isFull();
    }

    checkForTie(){
      if(this.columns.every(col=>col.isFull())){
        this.winnerNum = 3;
      }
    }

    checkForColumnWin(){
        for (let i = 0; i < this.columns.length; i++) {
            let winInspector = new ColumnWinInspector(this.columns[i].tokens);
            let check = winInspector.inspect();
            if (check === 1 || check === 2) {
                this.winnerNum = check;
                return;
            }
        }
    }

    inspectorHelper(groupArray){
      for (let i = 0; i < groupArray.length; i++) {
        let check = groupArray[i].inspect();
        if (check === 1 || check === 2) {
            this.winnerNum = check;
            return;
        }
      }
    }

    checkForRowWin() {
        const group1 = new RowWinInspector(this.columns.slice(0, 4));// [obj0,obj1,obj2,obj3]
        const group2 = new RowWinInspector(this.columns.slice(1, 5));// [obj1,obj2,obj3,obj4]
        const group3 = new RowWinInspector(this.columns.slice(2, 6));// [obj2,obj3,obj4,obj5]
        const group4 = new RowWinInspector(this.columns.slice(3));// [obj3,obj4,obj5,obj6]
        let groupArray = [group1, group2, group3, group4];
        this.inspectorHelper(groupArray);
    }

    checkForDiagonalWin() {
        const group1 = new DiagonalWinInspector(this.columns.slice(0, 4));// [obj0,obj1,obj2,obj3]
        const group2 = new DiagonalWinInspector(this.columns.slice(1, 5));// [obj1,obj2,obj3,obj4]
        const group3 = new DiagonalWinInspector(this.columns.slice(2, 6));// [obj2,obj3,obj4,obj5]
        const group4 = new DiagonalWinInspector(this.columns.slice(3));// [obj3,obj4,obj5,obj6]
        let groupArray = [group1, group2, group3, group4];
        this.inspectorHelper(groupArray);
    }
   /*  saveData() {
        let dataObj = {
            playerone: this.player1,
            playertwo: this.player2,
            turn: this.turn,
            winnernum: this.winnerNum,
            columns: this.columns
        }; */
        /* let serializer = new GameJsonSerializer(dataObj);
        localStorage.setItem('stored-data', serializer.serialize());
    } */

    /* loadData() {
        let storedData = localStorage.getItem('stored-data');
        let deserializer = new GameJsonDeserializer(storedData);
        let dataObj = deserializer.deserialize();
        debugger
        if (dataObj === null) return null;

        this.player1 = dataObj.playerone;
        this.player2 = dataObj.playertwo;
        this.turn = dataObj.turn;
        this.winnernum = dataObj.winnerNum;
        this.columns = dataObj.columns;
    }; */
};
