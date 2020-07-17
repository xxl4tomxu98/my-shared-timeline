export class RowWinInspector {
    constructor(columnsArr) {
        this.columnsArr = columnsArr;
    }

    inspect() {
        for (let j = 0; j < 6; j++) {
            if (this.columnsArr[0].tokens[j] === this.columnsArr[1].tokens[j] &&
                this.columnsArr[0].tokens[j] === this.columnsArr[2].tokens[j] &&
                this.columnsArr[0].tokens[j] === this.columnsArr[3].tokens[j] &&
                this.columnsArr[0].tokens[j] !== null) {
                return this.columnsArr[0].tokens[j];
            }
        }
        return 0;
    }
}
