#!/usr/bin/env node
'use strict';
const archiveType = require('archive-type');
const meow = require('meow');
const readChunk = require('read-chunk');

const cli = meow(`
	Usage
	  $ archive-type <file>
	  $ cat <file> | archive-type

	Examples
	  $ archive-type foo.zip
	  zip
	  $ cat foo.tar | archive-type
	  tar
`);

function init(data) {
	const type = archiveType(data);

	if (!type) {
		console.error('Unrecognized archive type');
		process.exit(65);
	}

	console.log(type.ext);
}

const input = cli.input[0];

if (!input && process.stdin.isTTY) {
	console.error('Specify a filename');
	process.exit(1);
}

if (input) {
	init(readChunk.sync(cli.input[0], 0, 262));
} else {
	process.stdin.once('data', init);
}
