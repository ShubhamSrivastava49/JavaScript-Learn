// const obj = {
//     a:function(){
//         console.log('hii');
//         return this
//     },
//     b:function(){
//         console.log('bye');
//         return this;
//     }
// };

// obj.a().b();

const arr = [2,3,4,5,6];
Array.prototype.times2 = function(){
    
    var ar =[];
    for(var i =0; i<this.length;i++){
        ar.push( this[i] * 2 )
        
    }
    return ar;
}
console.log(arr.times2());
// function test(){
//     var i;
//     for(i =0; i<arr.length;i++){
//         this[i] = 2 *  this[i] 
//     }
    
// }
//test()


 

// const obj = [{
//     name:'romil',
//     contact:{
//         mobile:90909009909
//     }
// },
// {
//     name:'sikka',
//     contact:{
//         mobile:778787887878
//     }
// }];

// const x =obj.map((item)=>{
//  return {
//      ...item,
//      sirname:'ok',
//      contact:{
//          ...item.contact,
//          landline:1000009
//      }
//  }
// })
// console.log(x)



// var arrFind = [2,3,2];
// let length =0;
// while(arrFind[length] <=arrFind[length]){
//     length++
// }

// console.log(length)



