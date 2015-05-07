// ###Letter Grader
// Write a function `letterGrader` 
// which takes a test score 
// and returns the equivalent letter grade.

// * A: 90-100
// * B: 80-99
// * C: 70-79
// * D: 60-69
// * F: 0-59

// ```
// letterGrader(98);
//=> 'A'
// ```
// **Bonus:** Add '+' and '-' grades.  
// So a 98 is actually a A+ and an 80 is a B-

module.exports = {

	testNumber: function() {
		testNumber = 85;
		if (testNumber < 100 && testNumber > 1) {
		return true;
		}
	},

	gradeEquivalent: function() {
		testNumber = 85;
		if (testNumber < 100 && testNumber > 79) {
		return true;	
		}
	},	

	averageScore: function(inputArray) {
		var sum = 0;
		for (var i = 0; i < inputArray.length; i++) {
			sum += inputArray[i];
			var testArray = inputArray;
		}	
		return sum / inputArray;
		// sum / array.length
	},
}

// Write a function 'averageScore` which takes an array 
// of test scores and returns the average score.


