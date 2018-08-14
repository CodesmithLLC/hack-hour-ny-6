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
    let sum = 0;
    let numFrequency = {};
    
    //Store element occurrence in numFrequency object
    //Also add to sum
    for( let i =0; i < array.length; i++) {
        let currElement = array[i];
        sum += currElement;
        if(numFrequency[currElement]){
            numFrequency[currElement]++; 
        } else {
            numFrequency[currElement] = 1;
        }
    }
    
    //Find the max value in the numFrequency object 
    let maxValue = Math.max(...Object.values(numFrequency));

    //Filter out keys(numbers) who's frequency match the max value (the mode)
    let mode =  Object.keys(numFrequency).filter( element => numFrequency[element] === maxValue);

    //Find average
    let avg = Math.floor(sum / array.length);

    //Return true if avg equals max of mode
    return avg === Math.max(...mode);
}

// console.log(modemean([3,3,4,5]))

module.exports = modemean;
