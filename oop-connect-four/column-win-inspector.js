export class ColumnWinInspector {
    constructor(column) {
        this.column = column;
    }

    inspect() {
        for (let i = this.column.length -1; i >= 3; i--) {
            if (this.column[i] === this.column[i -1] &&
                this.column[i] === this.column[i - 2] &&
                this.column[i] === this.column[i - 3] &&
                this.column[i] !== null){
                return this.column[i];
            }
        }
        return 0;
    }
}
