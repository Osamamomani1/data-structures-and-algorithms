'use strict'
let validateBrackets = require('./stakequeuebraket')

describe('validateBrackets function',()=>{
    it('return true if brackets are matching',()=>{
       let input='([{()}]){}'
       expect(validateBrackets(input)).toEqual(true)
    }) 
    it('return true if string was empty',()=>{
    let input=''
    expect(validateBrackets(input)).toEqual(true)
    })
    it('return false if brackets are matching dose not match ',()=>{
        let input='([{)}]){}'
        expect(validateBrackets(input)).toEqual(false)
    })  
})

