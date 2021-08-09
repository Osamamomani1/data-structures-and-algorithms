let arr=[1,2,4,5]

function test(arr,num){
    let newArray=[];
    let middleNum=Math.round(arr.length/2);
    arr.forEach((el,idx)=>{
        if(idx!==middleNum){
            newArray.push(el)
        }else{
            newArray.push(num)
            newArray.push(el)
        }
    })
    return newArray
}

console.log(test(arr,3));