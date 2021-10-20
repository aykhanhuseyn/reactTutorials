type TPerson = {
	name: string;
	year: number;
};
const people: Array<TPerson> = [
	{ name: 'Wes', year: 1988 },
	{ name: 'Kait', year: 1986 },
	{ name: 'Irv', year: 1970 },
	{ name: 'Lux', year: 2015 },
];

type TComment = {
	text: string;
	id: number;
};
const comments = [
	{ text: 'Love this!', id: 523423 },
	{ text: 'Super good', id: 823423 },
	{ text: 'You are the best', id: 2039842 },
	{ text: 'Ramen is my fav food ever', id: 123523 },
	{ text: 'Nice Nice Nice!', id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const isOrOlderThanAge = (year, age) => new Date().getFullYear() - year >= age;
people.some; // YOUR CODE HERE
// Array.prototype.every() // is everyone 19 or older?
people.every; // YOUR CODE HERE

// Array.prototype.find()
// find the comment with the ID of 823423
comments; // YOUR CODE HERE

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const index = comments; // YOUR CODE HERE
