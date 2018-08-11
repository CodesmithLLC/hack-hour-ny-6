/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
    array = array.sort((a, b) => a - b);
    let mode = array[0];
    let prev = array[0];
    counter = 0;
    for(let i = 0; i < array.length; i++) {
        if(array[i] !== prev) {
            counter = 0;
            prev = array[i]
        }
        counter++;
        if(counter > mode){
            mode = array[i];
        }
    }
    
    let add =0;
    for(let i = 0; i < array.length; i++) {
        add += array[i];
    }
    add = add / array.length;
    if(mode === add) {
        return true;
    } else {
        return false;
    }
}
console.log(modemean([0,1,3,2,4]))
// module.exports = modemean;
