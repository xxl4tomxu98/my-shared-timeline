class Car{
    constructor(licenseNumber, key){
        this.plateNum = licenseNumber;
        this.key = key;
        this.enter = null;
    }
}

class ParkingLot{
    constructor(){
        this.spaces = [];
        this.keys = [];
    }
    enter(car){
        let today = new Date();
        this.spaces.push(car)
        this.keys.push(car.key)
        car.enter = today;
    }
    leave(car){
        let today = new Date();
        let price;
        for(let i = 0; i < this.spaces.length; i++){
            if(car === this.spaces[i]){
                this.spaces[i] = '';
            }
        }
        let totalHours = today - car.enter;
        // if(today.getHours() >= 6 || today.getHours() <= 12){

        // } else if(today.getHours() > 12 || today.getHours() <= 18){
        //     ///set price
        // } else if(today.getHours() > 18 || today.getHours() <= 20){
        //     //set price
        // } else if (today.getHours() ){

        // }
    }

}

let today = new Date();
console.log(typeof today)
console.log(today)
setTimeout(() => {
    let today1 = new Date();
    let diff = today1 - today;
    console.log(diff)
}, 5000);
