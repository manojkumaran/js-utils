/*
    Given an array and its size, split the array into groups of the size provided.
    If array can't be split evenly, the final chunk will be the remaining elements.

    Sample:
    chunk(['a', 'b', 'c', 'd'], 2);
    [['a', 'b'], ['c', 'd']]

    chunk(['a', 'b', 'c', 'd'], 3);
    [['a', 'b', 'c'], ['d']]
*/

Array.prototype.chunk = function(size){
    let finalArr = [];
    const arr = this;
    size = Math.max(size,0);
    const arrLen = arr == null? 0 : arr.length;

    if((size < 1) || !arrLen){
        return [];
    } 

    for(let i=0, j=arr.length; i<j; i+=size){
        finalArr.push( arr.slice(i,i+size)  )
    }
    return finalArr;
}

let arr = ['a','b','c','d','e',[1,3,4]];
console.log( arr.chunk(1) )