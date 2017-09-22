const test = require('ava');

const juiceResources = require('../');

test('returns a function', t => {
  t.true(typeof juiceResources === 'function');
});
