import { strict as assert } from 'assert';
import { sum } from './index.js';

describe('sum', () => {
  it('should return 3 for 1 + 2', () => {
    assert.equal(sum(1, 2), 3);
  });

  it('should return 5.5 for 2.5 + 3', () => {
    assert.equal(sum(2.5, 3), 5.5);
  });
});

/* eslint-env node, jest */
const add = require('./index');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});