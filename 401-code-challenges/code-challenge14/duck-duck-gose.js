'use strict';
// let queue = ["A", "B", "C", "D", "E"];
// let k = 3;

let DuckDuckGoose = function(queue, k){
	let counter = 0;
  while(counter < k-1){
  	queue.push(queue.shift());
    // console.log(queue) 
    counter++;
  }
  if(queue.length > 1){
  	queue.shift();
    
  }
//   console.log(queue)
  
  return queue.length === 1 ? queue[0] : DuckDuckGoose(queue, k);
}

// console.log(DuckDuckGoose(queue, k));

module.exports=DuckDuckGoose