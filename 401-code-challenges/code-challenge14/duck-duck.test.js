'use strict'
let DuckDuckGoose = require('./duck-duck-gose')

describe('DuckDuckGoose function',()=>{
    it('work',()=>{
        let queue = ["A", "B", "C", "D", "E"];
        let k = 3;
       expect(DuckDuckGoose(queue, k)).toEqual('D')
    }) 
})