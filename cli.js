#!/usr/bin/env node
'use strict';
var archiveType = require('archive-type');
var getStdin = require('get-stdin');
var meow = require('meow');
var readChunk = require('read-chunk');

var cli = meow({
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
	var type = archiveType(new Buffer(data));

	if (!type) {
		console.error('Not a recognized archive');
		process.exit(1);
	}

	console.log(type);
}

if (!cli.input.length && process.stdin.isTTY) {
	console.error([
		'Specify a valid archive file',
		'',
		'Example',
		'  $ archive-type foo.tar.gz',
		'  $ cat foo.tar.gz | archive-type'
	].join('\n'));

	process.exit(1);
}

if (cli.input.length) {
	run(readChunk.sync(cli.input[0], 0, 262));
} else {
	getStdin.buffer(run);
}
