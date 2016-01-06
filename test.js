import execa from 'execa';
import test from 'ava';

test('show help screen', async t => {
	const ret = await execa('./cli.js', ['--help']);
	t.regexTest(/Detect the archive type of a Buffer/, ret.stdout);
});
