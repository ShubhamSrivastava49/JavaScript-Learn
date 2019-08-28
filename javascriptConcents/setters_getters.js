let Car = function(_color){
  
    this.setColor = (color)=>{
        _color = color
    }
    this.getColor =()=>{
        return _color
    }
}

let redCar = new Car('red');

console.log(redCar.getColor())

//We can create