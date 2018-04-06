/*
 Given an array. Remove all falsey values like false, null, 0, "", undefined, and NaN 
    [0, 1, false, 2, '', 3, null].compact()
*/

const compact = (arr) => {
    let result = [];

    if(arr == null){
        return result
    }


    for(let i=0; i<arr.length; i++){
        if(arr[i]){
            result.push(arr[i])
        }
    }
    return result
}

let testarr = [0, 1, false, 2, '', 3, null];

console.log(compact(testarr));