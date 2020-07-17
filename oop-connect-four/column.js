export class Column{
    constructor(){
        this.tokens = [null,null,null,null,null,null];
    }
    add(playerNum){
        for (let i = this.tokens.length-1; i >= 0;i--){
            if (this.tokens[i] === null){
                this.tokens[i] = playerNum;
                return;
            }
        }
    }
    getTokenAt(rowIndex){
        return this.tokens[rowIndex];
    }

    isFull(){
      if(this.tokens.includes(null)){
        return false;
      }
      return true;
    }
}
