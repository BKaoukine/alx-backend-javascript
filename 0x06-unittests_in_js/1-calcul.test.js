const assert = require('assert');
const { it, describe } = require('mocha');
const calculateNumber = require('./1-calcul');

describe('all calculations', function () {
  describe('SUM calculation', function () {
    it('checking if numbers round', function () {
      const res = calculateNumber('SUM', 1, 2);
      assert.strictEqual(res, 3);
    });
    it('checking if numbers round', function () {
      const res = calculateNumber('SUM', 1.3, 2.1);
      assert.strictEqual(res, 3);
    });
    it('checking if numbers round', function () {
      const res = calculateNumber('SUM', 1.6, 2.9);
      assert.strictEqual(res, 5);
    });
    it('checking if numbers round', function () {
      const res = calculateNumber('SUM', 0, 0);
      assert.strictEqual(res, 0);
    });
    it('checking if numbers round', function () {
      const res = calculateNumber('SUM', -1.7, -1.8);
      assert.strictEqual(res, -4);
    });
    it('checking if numbers round', function () {
      const res = calculateNumber('SUM', -1.3, -1.3);
      assert.strictEqual(res, -2);
    });
  });
  describe('SUBSTRACT numbers', function () {
    it('checking substraction of rounded numbers', function () {
      const res = calculateNumber('SUBTRACT', 2, 1);
      assert.strictEqual(res, 1);
    });
    it('checking substraction of rounded numbers', function () {
      const res = calculateNumber('SUBTRACT', 2.2, 1.4);
      assert.strictEqual(res, 1);
    });
    it('checking substraction of rounded numbers', function () {
      const res = calculateNumber('SUBTRACT', 2.8, 1.4);
      assert.strictEqual(res, 2);
    });
    it('checking substraction of rounded numbers', function () {
      const res = calculateNumber('SUBTRACT', 2.9, 1.7);
      assert.strictEqual(res, 1);
    });
  });

  describe('DIVIDE numbers', function () {
    it('checking divide of rounded numbers', function () {
      const res = calculateNumber('DIVIDE', 2.2, 1.4);
      assert.strictEqual(res, 2);
    });
    it('checking divide of rounded numbers', function () {
      const res = calculateNumber('DIVIDE', 2.9, 1.8);
      assert.strictEqual(res, 1.5);
    });
    it('checking divide of rounded numbers', function () {
      const res = calculateNumber('DIVIDE', 2.2, 0);
      assert.strictEqual(res, 'Error');
    });
  });
});

