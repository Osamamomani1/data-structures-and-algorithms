'use strict';
let array=[8,4,23,42,16,15];

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let temp = arr[i];
      let j;
      for (j = i - 1; j >= 0 && arr[j] > temp; j--) {
        arr[j + 1] = arr[j];
      }
      arr[j + 1] = temp;
    }
    return arr;
  }

console.log(insertionSort(array));

module.exports= insertionSort;