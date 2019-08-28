const Car = function(color){
 this.color = 'red'
}

Car.prototype ={
    getColor(){
        return this.color
    }
}

const ToyCar = function(colors){
  Car.call(this)
  this.color = colors;
}

ToyCar.prototype = Object.create(Car.prototype);
ToyCar.prototype.constructor = ToyCar;
const legocar = new ToyCar('blue');
console.log(legocar.getColor());
