class BallPointPen{
    constructor(color){
        this.tank = 100;
        this.canWrite = false;
        this.color = color;
    }
    click(){
        if(this.canWrite === false){
            this.canWrite = true;
        } else {
            this.canWrite = false;
        }
    }
    write(){
        if(this.tank === 0){
            throw new Error('Empty pen, buy a new pen.')
        }
        if(this.canWrite){
            throw new Error('Pen must be clicked on.')
        } else {
            this.tank --;
        }
    }
    checkInk(){
        return this.tank;
    }
}