import execa from 'execa';
import test from 'ava';

test('show help screen', async t => {
	const ret = await execa('./cli.js', ['--help']);
	t.regexTest(/Detect the archive type of a Buffer/, ret.stdout);
});

test('get archive type', async t => {
	const tar = await execa('./cli.js', ['fixtures/test.tar']);
	const zip = await execa('./cli.js', ['fixtures/test.zip']);
	t.is('tar', tar.stdout);
	t.is('zip', zip.stdout);
});
