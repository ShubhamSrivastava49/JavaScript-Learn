//this in global scope
this.table ='myTable';

//this inside an object 
let johnnRoom = {
    table:'john table' 
}

//this inside a function
const cleanTable_1 = function(soap){
    console.log(this.table)
}

//this inside a method
this.garage = {
    table:'mary table',
    // cleantable(){
    //     console.log(this.table)
    // }
}

//this inside inner function
const cleanTable_2 = function(soap){
    //let that = this;
    const innerFunction =  (_soap)=>{
       console.log(this.table + _soap)
    }
    innerFunction(soap)
    //innerFunction.call(this,soap)
    //WE sould use arrow functions because it takes outer scope this 
}


 //console.log(cleanTable_2.call(johnnRoom,'some soap'));
// console.log(cleanTable_1.call(johnnRoom,'some soap'));
// console.log(cleanTable_1.call(this.garage,'some soap'));
// console.log(cleanTable_1.call(this,'some soap'));


// this inside a constructor
let createRoom = function(tableName){
    this.table = tableName;
 }
 const max = new createRoom('max');
 
 createRoom.prototype.cleanTable_3 = function(soap){
   console.log(this.table)
 }
 max.cleanTable_3('some soap')

 // this inside classes
  class RoomCreate {
      constructor(name){
          this.name = name
      }
      cleanTable_Class(soap){
       console.log(this.name )
      }
  }

  const rodri = new RoomCreate('rodri');
  rodri.cleanTable_Class('some soap')