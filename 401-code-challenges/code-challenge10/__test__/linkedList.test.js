"use strict";

let Queue = require("../queue");
let Stack = require("../stack");

describe("Stack", () => {
  it("Can successfully instantiate an empty stack", () => {
    let newStack = new Stack();
    expect(newStack.top).toBeNull();
  });
  it("Can successfully push onto a stack", () => {
    let newStack = new Stack();
    newStack.push(1);
    expect(newStack.top.value).toEqual(1);
    expect(newStack.top.next).toBeNull();
  });
  it("Can successfully push multiple values onto a stack", () => {
    let newStack = new Stack();
    newStack.push(1);
    newStack.push(2);
    expect(newStack.top.value).toEqual(2);
    expect(newStack.top.next.value).toEqual(1);
  });
  it("Can successfully pop off the stack", () => {
    let newStack = new Stack();
    newStack.push(1);
    newStack.push(2);
    expect(newStack.pop()).toEqual(2);
    expect(newStack.top.value).toEqual(1);
  });
  it("Can successfully empty a stack after multiple pops", () => {
    let newStack = new Stack();
    newStack.push(1);
    newStack.push(2);
    newStack.pop();
    newStack.pop();
    expect(newStack.top).toBeNull();
  });
  it("Can successfully peek the next item on the stack", () => {
    let newStack = new Stack();
    newStack.push(1);
    newStack.push(2);
    newStack.peek();
    expect(newStack.top.value).toEqual(2);
  });
  it("Calling pop or peek on empty stack raises exception", () => {
    let newStack = new Stack();
    newStack.peek();
    expect((newStack.peek())).toEqual('stack is empty')
  });
  it("Can successfully enqueue into a queue", () => {
    let newQueue = new Queue();
    newQueue.enqueue(1);
    expect(newQueue.front.value).toEqual(1);
  });
  it("Can successfully enqueue multiple values into a queue", () => {
    let newQueue = new Queue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    expect(newQueue.front.value).toEqual(1);
    expect(newQueue.front.next.value).toEqual(2);
  });
  it("Can successfully dequeue out of a queue the expected value", () => {
    let newQueue = new Queue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.dequeue();
    expect(newQueue.front.value).toEqual(2);
  });
  it("Can successfully peek into a queue, seeing the expected value", () => {
    let newQueue = new Queue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.peek();
    expect(newQueue.front.value).toEqual(1);
  });
  it("Can successfully empty a queue after multiple dequeues", () => {
    let newQueue = new Queue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.dequeue();
    newQueue.dequeue();
    expect(newQueue.front).toBeNull();
  });
  it("Can successfully instantiate an empty queue", () => {
    let newQueue = new Queue();
    expect(newQueue.front).toBeNull();
  });
  it("Calling dequeue or peek on empty queue raises exception", () => {
    let newQueue = new Queue();
    expect((newQueue.dequeue())).toEqual('queue is empty');
  });

});

