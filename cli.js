#!/usr/bin/env node
'use strict';
const meow = require('meow');
const pkgDownloads = require('pkg-downloads');

const cli = meow([
	'Usage',
	'  $ pkg-downloads <day|week|month> <name>',
	'',
	'Examples',
	'  $ pkg-downloads day chalk',
	'  12345',
	'  $ pkg-downloads week elephants',
	'  error message'
]);

if (cli.input.length < 2) {
	console.error('Expected two strings');
	process.exit(1);
}

pkgDownloads(cli.input[0], cli.input[1]).then(res => {
	console.log(res);
}).catch(function (err) {
	console.log(err);
});
