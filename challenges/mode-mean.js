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
    let sum = 0
    let freq = {};
    
    //store element frequency in object
    for( let i =0; i < array.length; i++) {
        let currElement = array[i]
        sum += currElement;
        if(freq[currElement]){
            freq[currElement]++; 
        } else {
            freq[currElement] = 1;
        }
    }
    
    //find the max value in the frequency object 
    let maxValue = Math.max(...Object.values(freq));

    //Filter out keys that match the max value (the mode)
    let mode =  Object.keys(freq).filter( ele => freq[ele] === maxValue);

    let avg = Math.floor(sum / array.length);

    // Return true if avg equals max of mode
    return avg === Math.max(...mode);
}

// console.log(modemean([1,2,3,2,1,9]))

module.exports = modemean;
