/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */


// THIS DOES ANY 2 NUMBERS IN AN ARRAY === TARGET
function subsetSum(array, target) {
    if(array.length === 1) {
        return false
    }
    for(let i = 1; i < array.length; i++) {
        if(array[0] + array[i] === target) {
            return true
        } 
    }

    newArr = array.splice(0,1)
    return subsetSum(array, target)

}


function subsetSum(array, target) {
    if(array.length  === 2) {
        return false
    }
    let arrayCopy = [];
    for(let i = 0; i < array.length; i++) {
        // console.log('i ',array[i])
        for(let j = 0; j < array.length; j++){ 
            if(array[i] !== array[j]) {
                if(array[i] + array[j] === target) {
                    return true;
                }
            }            
        }
    }
    let addFirstTwoInd = array[0] + array[1];
    arrayCopy[0] = addFirstTwoInd;
    for(let na = 2; na < array.length; na++) {
        arrayCopy.push(array[na])
    }
    return subsetSum(arrayCopy, target)
}
// module.exports = subsetSum;

console.log(subsetSum([3, 7, 4, 2], 5))
console.log(subsetSum([3, 34, 4, 12, 5, 12], 32))
console.log(subsetSum([8, 2, 4, 12], 13))
console.log(subsetSum([8, -2, 1, -3], 6))