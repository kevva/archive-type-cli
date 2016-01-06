#!/usr/bin/env node
'use strict';
const archiveType = require('archive-type');
const getStdin = require('get-stdin');
const meow = require('meow');
const readChunk = require('read-chunk');

const cli = meow({
	help: [
		'Usage',
		'  $ archive-type <file>',
		'  $ cat <file> | archive-type',
		'',
		'Example',
		'  $ archive-type foo.tar.gz',
		'  $ cat foo.tar.gz | archive-type'
	]
});

function run(data) {
	const type = archiveType(new Buffer(data));

	if (!type) {
		console.error('Not a recognized archive');
		process.exit(1);
	}

	console.log(type.ext);
}

if (!cli.input.length && process.stdin.isTTY) {
	console.error('Specify a file');
	process.exit(1);
}

if (cli.input.length) {
	run(readChunk.sync(cli.input[0], 0, 262));
} else {
	getStdin.buffer(run);
}
