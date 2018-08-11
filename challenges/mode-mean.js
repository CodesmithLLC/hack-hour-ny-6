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

// mode which number appears the most
//mean average
function modemean(array) {
    let mean = array.reduce((a,b) => a + b)/array.length;
    let store ={};
    let count = 0;
    let variable;
    array.forEach(function(el,index){
        if(store[el] === undefined){
         store[el] = 1;
     }else{
         store[el] = store[el]+1;
     }
           
    })
    
    for (key in store){
            if(store[key] > count){
        count = store[key];
              variable = key;
        }
    }
    console.log(mean);
    console.log(variable)
    if(variable == mean){
    return true;
    }return false;

}

module.exports = modemean;
