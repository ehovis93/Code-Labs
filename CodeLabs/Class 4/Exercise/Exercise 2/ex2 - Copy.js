
function arrayCount(arr) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === true) {
            result.push(arr[i]);
        }
    }
    return result.length;
}
// console.log(arrayCount([true, false, false, true, false]));
// console.log(arrayCount([false, false, false, false]));
// console.log(arrayCount());