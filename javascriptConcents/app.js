var x =10;
var obj1 ={x:30};
var obj ={
    x:20,
    getX:function(){
        return this.x;
    }

}

console.log(obj.getX.call(x))