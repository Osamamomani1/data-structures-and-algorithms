'use strict';

let inputArray= [ [0, 1, 5], [-4, 7, 2], [-3, 12, 11] ];


function test(inputArray){
    let outputArray=[];
    inputArray.forEach((el)=>{
        let sum=0;
        el.forEach(num=>{
            sum=sum+num;
        })
        outputArray.push(sum)
    })


    return outputArray
}

console.log(test(inputArray));