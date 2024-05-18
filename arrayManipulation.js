// Task 1
function processArray(numbers) {
	const result = [];

	for ( let numOfTimes = 0; numOfTimes < numbers.length; numOfTimes++) {
		if ( numbers[numOfTimes] % 2 === 0) {
			result.push(numbers[numOfTimes] ** 2)
		} else {
			result.push(numbers[numOfTimes] ** 3)
		}
	}
	
	return result;
}


