// Only change code below this line

// Only change code above this line
class Thermostat{
    constructor(temp){
        this._temp=temp
    }
    set temperature (t){
        this._temp = t*9.0/5+32;
    }
    get temperature(){
        return 5/9*(this._temp-32);
    }
}
const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius