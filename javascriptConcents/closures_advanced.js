for(let i =0; i<3;i++){
    setTimeout(()=>{
    console.log(i);
    },1000)
   
}

// console.log('after the loop')


// let f = () =>{
//     let i =1; 
//     let j =2;
//     return () =>{
//         console.log(i,j)
//     }
// }
// console.log(f()());

let multiply = ((a)=>
{
  return ((b)=>{
      return ((c)=>{
        return a*b*c;
      })
  })
})
console.log(multiply(2)(3)(2))