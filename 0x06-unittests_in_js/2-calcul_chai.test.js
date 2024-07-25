const expect = require('chai').expect;
const { it, describe } = require('mocha');
const calculateNumber = require('./2-calcul_chai');

describe('all calculations', function () {
  describe('SUM calculation', function () {
    it('checking if numbers round', function () {
      expect(calculateNumber('SUM', 1, 2)).to.equal(3);
    });
    it('checking if numbers round', function () {
      expect(calculateNumber('SUM', 1.3, 2.1)).to.equal(3);
    });
    it('checking if numbers round', function () {
      expect(calculateNumber('SUM', 1.6, 2.9)).to.equal(5);
    });
  });
  describe('SUBSTRACT numbers', function () {
    it('checking substraction of rounded numbers', function () {
      expect(calculateNumber('SUBTRACT', 2, 1)).to.equal(1);
    });
    it('checking substraction of rounded numbers', function () {
      expect(calculateNumber('SUBTRACT', 2.2, 1.4)).to.equal(1);
    });
    it('checking substraction of rounded numbers', function () {
      expect(calculateNumber('SUBTRACT', 2.9, 1.7)).to.equal(1);
    });
  });

  describe('DIVIDE numbers', function () {
    it('checking divide of rounded numbers', function () {
      expect(calculateNumber('DIVIDE', 2.2, 1.4)).to.equal(2);
    });
    it('checking divide of rounded numbers', function () {
      expect(calculateNumber('DIVIDE', 2.9, 1.8)).to.equal(1.5);
    });
    it('checking divide of rounded numbers', function () {
      expect(calculateNumber('DIVIDE', 2.2, 0)).to.equal('Error');
    });
  });
});
