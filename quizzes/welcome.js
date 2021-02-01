'use strict';

const assert = require('assert');

// Params
const [,, message = 'Coder', option] = process.argv;

// What happen if ...
// ... you have this funcion ...
const welcome = message => {
	return
	'Hi, ' + message + '!';
};

// ... and try to execute ?
const mistery = welcome(message);

// Options

const options = {
	1: undefined,
	2: null,
	3: `Hi, ${message}!`,
	4: '[object Object]'
};

// results

if(!option) {
	console.log('The result is', mistery);
	return;
}
	
try {

	assert.strictEqual(mistery, options[option]);
	console.log('You Win!!');

} catch(error) {
	console.error('You Failed');
}
