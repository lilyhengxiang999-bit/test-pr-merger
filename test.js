const { add, subtract } = require('./index.js');
const assert = require('assert');
assert.strictEqual(add(1, 2), 3);
assert.strictEqual(add(-1, 1), 0);
assert.strictEqual(subtract(5, 3), 2);
assert.strictEqual(subtract(0, 1), -1);
console.log('All tests passed!');
