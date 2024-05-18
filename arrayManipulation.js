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



// Task 2


function formatArrayStrings (strings, number) {
	
	

	for(let i = 0; i < strings.length; i++) {
		if ( number[i] % 2 === 0) {
			strings[i] = strings[i].toUpperCase();
		} else {
			strings[i] = strings[i].toLowerCase();
		}
	}
}

const strings = ["Christian", "Kwasi", "Dwamena", "Agyapong"];
const numbers = processArray([1, 2, 3, 4,]); // Assume this gives [4, 27, 16]

const modifiedStrings = [...strings];

formatArrayStrings(modifiedStrings, numbers);

if (require.main === module )
console.log(modifiedStrings, numbers); 




module.exports = {
	strings,
	modifiedStrings,
  };