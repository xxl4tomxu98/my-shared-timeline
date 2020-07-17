export class DiagonalWinInspector {
  constructor(columnsArr) {
      this.columnsArr = columnsArr;
  }
// this.tokens = [null,null,null,null,null,null];
//          (Top)   0   1    2    3    4     5 (bottom)
    inspect() {
        //checking downward
        for (let j = 0; j < 3; j++) {
          if (this.columnsArr[0].tokens[j] === this.columnsArr[1].tokens[j+1] &&
              this.columnsArr[0].tokens[j] === this.columnsArr[2].tokens[j+2] &&
              this.columnsArr[0].tokens[j] === this.columnsArr[3].tokens[j+3] &&
              this.columnsArr[0].tokens[j] !== null) {
              return this.columnsArr[0].tokens[j];
          }
        }
        //checking upward
        for (let j=5;j>=3;j--){
          if (this.columnsArr[0].tokens[j] === this.columnsArr[1].tokens[j-1] &&
            this.columnsArr[0].tokens[j] === this.columnsArr[2].tokens[j-2] &&
            this.columnsArr[0].tokens[j] === this.columnsArr[3].tokens[j-3] &&
            this.columnsArr[0].tokens[j] !== null) {
            return this.columnsArr[0].tokens[j];
        }
      }
      return 0;
  }
}
