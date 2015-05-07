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

var jasBasics = require("../grader.js")

describe('Letter Grader', function() {
	it('should return a whole test score number', function() {
	expect(jasBasics.testNumber(85)).toEqual(true);
	});

	it('should give the equivalent letter grade for the number', function() {
	expect(jasBasics.testNumber(85)).toEqual(true);	
	});
});


// Write a function 'averageScore` which takes an array 
// of test scores and returns the average score.

describe('averageScore', function() {
	it('should give the average number of an array of numbers', function() {
	var testInput = [12, 3, 4, 10];
	expect(jasBasics.averageScore(testInput)).toEqual(7.25);
	});
});