let promise1 = function(){
    return new Promise((resolve,reject)=>{
        if(true){
            resolve('sucesss')
        }
        
    })

}
promise1().then((res)=>{
    console.log(res + 'dsda')
})