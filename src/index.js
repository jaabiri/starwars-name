var uniqueRandomArray = require('unique-random-array');
var starWaresNames=require('./starwars-names.json');



module.exports = {
	all:starWaresNames,
	random:uniqueRandomArray(starWaresNames)
};