'use strict'

let AnimalShelter= require('../queue');

describe('Animalshelter Module', ()=> {
    it('enqueue test', ()=> {
        let newQueue = new AnimalShelter()
        newQueue.enqueue({name:'kitty',
                         type:'cat'});
        newQueue.enqueue({name:'esco',
                         type:'dog'});
        newQueue.enqueue({name:'kiki',
                         type:'cat'});
        newQueue.enqueue({name:'hit',
                         type:'dog'});
        expect(newQueue.toString()).toEqual('{kitty--cat}-->{esco--dog}-->{kiki--cat}-->{hit--dog}-->NULL');
        expect(newQueue.front.value).toEqual({ name: 'kitty', type: 'cat' })
    })
    it('dequeue(cate) test', ()=> {
        let newQueue = new AnimalShelter()
        newQueue.enqueue({name:'kitty',
                         type:'cat'});
        newQueue.enqueue({name:'esco',
                         type:'dog'});
        newQueue.enqueue({name:'kiki',
                         type:'cat'});
        newQueue.enqueue({name:'hit',
                         type:'dog'});
        newQueue.dequeue('cat');                
        expect(newQueue.toString()).toEqual('{esco--dog}-->{kiki--cat}-->{hit--dog}-->NULL');
        expect(newQueue.front.value).toEqual({ name: 'esco', type: 'dog' })
    })
    it('dequeue(dog) test', ()=> {
        let newQueue = new AnimalShelter()
        newQueue.enqueue({name:'kitty',
                         type:'cat'});
        newQueue.enqueue({name:'esco',
                         type:'dog'});
        newQueue.enqueue({name:'kiki',
                         type:'cat'});
        newQueue.enqueue({name:'hit',
                         type:'dog'});
        newQueue.dequeue('dog'); 
        expect(newQueue.toString()).toEqual('{kitty--cat}-->{kiki--cat}-->{hit--dog}-->NULL');
        expect(newQueue.front.value).toEqual({ name: 'kitty', type: 'cat' })
    })
    it('dequeue(qwe) test', ()=> {
        let newQueue = new AnimalShelter()
        newQueue.enqueue({name:'kitty',
                         type:'cat'});
        newQueue.enqueue({name:'esco',
                         type:'dog'});
        newQueue.enqueue({name:'kiki',
                         type:'cat'});
        newQueue.enqueue({name:'hit',
                         type:'dog'});
        newQueue.dequeue('qwe'); 
        expect(newQueue.toString()).toEqual('{kitty--cat}-->{esco--dog}-->{kiki--cat}-->{hit--dog}-->NULL');
        expect(newQueue.dequeue('qwe')).toEqual('null')
    })
    it('dequeue(dog) test while queue is empty', ()=> {
        let newQueue = new AnimalShelter()
        newQueue.dequeue('dog'); 
        expect(newQueue.dequeue('dog')).toEqual('queue is empty')
    })
    it('enqueue(not cat or dog) test while queue is empty', ()=> {
        let newQueue = new AnimalShelter()
        
        expect(newQueue.enqueue({name:'kitty',type:'wolf'})).toEqual('you can only enter dog or cat here')
    })


});
