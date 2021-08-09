'use strict';
let array = [1,2,3,4]
let reversarray = (arr)=>{
    let newarr=[];
    // for (let i = (arr.length-1); i >= 0; i--) {
    //   newarr.push(arr[i]) ;
        
    // }
    // return(newarr)
    for (let i = 0; i < arr.length; i++) {
        newarr.push(arr[(arr.length-1)-i]) ;
        
    }
    return(newarr)
};

console.log(reversarray(array))