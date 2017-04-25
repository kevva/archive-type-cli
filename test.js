import execa from 'execa';
import test from 'ava';

test('show help screen', async t => {
	const {stdout} = await execa('./cli.js', ['--help']);
	t.regex(stdout, /Detect the archive type of a file or stdin/);
});

test('get archive type', async t => {
	const tar = await execa.stdout('./cli.js', ['fixtures/test.tar']);
	const zip = await execa.stdout('./cli.js', ['fixtures/test.zip']);
	t.is('tar', tar);
	t.is('zip', zip);
});
