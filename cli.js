#!/usr/bin/env node
'use strict';
const meow = require('meow');
const pkgDownloads = require('pkg-downloads');

const cli = meow(`
	Usage
		$ pkg-downloads <name> -p <day|week|month>

	Options
	-p, --period

	Examples
		$ pkg-downloads chalk --period day
		12345

		$ pkg-downloads week elephants
		error message
`, {
	alias: {
		p: 'period'
	}
});

if (!cli.input.length) {
	console.error('Expected a name');
	process.exit(1);
}

pkgDownloads(cli.input[0], cli.flags).then(res => {
	console.log(res);
}).catch(function (err) {
	console.log(err);
});
