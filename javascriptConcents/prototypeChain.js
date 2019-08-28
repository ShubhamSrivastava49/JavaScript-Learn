const Car = function(){}

Car.prototype ={
    print(){
        return 'I am a car'
    }
}
const ToyCar = function(){}
   
ToyCar.prototype = Object.create(Car.prototype);

ToyCar.prototype.print = function(){
    return 'I am a toy car'
}
const Transformer = function(){}
Transformer.prototype = Object.create(ToyCar.prototype);
 
// Transformer.prototype.print = function(){
//     return 'I am a transformer'
// }

const toyota = new Car();
const legoCar = new ToyCar();
const optimusPrim = new Transformer();

console.log(optimusPrim.print())
