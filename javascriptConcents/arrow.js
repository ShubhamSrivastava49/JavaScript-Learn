
    var obj ={
        sayName:function(){
            helperObject.doSomethingAsync('superCool', () => {
                console.log(this); // this === myObject
              });

             }
            
        }
    obj.sayName();
