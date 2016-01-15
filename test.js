import execa from 'execa';
import test from 'ava';

test('show help screen', async t => {
	const ret = await execa('./cli.js', ['--help']);
	t.regexTest(/pkg-downloads <day|week|month> <name>/, ret.stdout);
});

test('get download stats', async t => {
	t.is(typeof (await execa('./cli.js', ['day', 'ava'])).stdout, 'string');
});
