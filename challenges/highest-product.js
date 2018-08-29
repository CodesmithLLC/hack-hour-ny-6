/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
	let maxProduct = 0;
	for(let i = 0; i < array.length - 2; i++){
		for(let j = i + 1; j < array.length - 1; j++){
			for(let k = j + 1; k < array.length; k++){
				let product = array[i] * array[j] * array[k];
				if(product > maxProduct){
					maxProduct = product;
				}
			}
		}
	}
return maxProduct;
}


module.exports = highestProduct;
