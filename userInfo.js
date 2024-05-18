// Task 3
const { strings , modifiedStrings } = require('./arrayManipulation');


function createUserProfiles() {
	
	const userProfiles = [];  // Array to store user profiles
	let idCounter = 1;  // Start ID counter at 1
	     
  
	for (let i = 0; i < strings.length; i++) {
		userProfiles.push ({
		originalName: strings[i],
		modifiedName: modifiedStrings[i],
		id: idCounter++          // Assign and increment ID
	  });
  
	  
	}
  
	return userProfiles;
  }


  const userProfiles = createUserProfiles();
  console.log(userProfiles); 