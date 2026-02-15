const { add } = require('./index.js');
const assert = require('assert');
assert.strictEqual(add(1, 2), 3);
assert.strictEqual(add(-1, 1), 0);
console.log('All tests passed!');
