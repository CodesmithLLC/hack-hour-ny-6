/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {


	const strArr = str.split('');
	// let isPal = true
	for (let i=0; i < strArr.length; i++){
		if (strArr[i] !== strArr[strArr.length - (i+1)]){
			// isPal = false;
			return false
		}
	}
	return true

}

function permutations(str) {
	const strArr = str.split('')
	const permutations = [];
	console.log({strArr});
	// let permCount = 1;
	//
	// for (let i=0; i < strArr.length; i++){
	// 	permCount = permCount * (i+1);
	// }

	for (let i=0; i < strArr.length; i++){
		const currLetter = strArr[i];
		const currArr = [ ...strArr ].splice(i, 1);
		console.log({currArr});
		for (let j=0; j < strArr.length; j++){
			const permArr = currArr.splice(j, 0, strArr[i]);
			console.log({permArr});
			permutations.push(permArr);
		}
	}
	return permutations
}

console.log(permPalin('loolt'))
console.log(permutations('bob'));

module.exports = permPalin;
