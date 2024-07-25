const { describe, it } = require('mocha');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const expect = require("chai").expect;

describe('sendPaymentRequestToApi', function() {
  let consoleSpy;
  beforeEach('setting up a spy to work with each test', function() {
    consoleSpy = sinon.spy(console, 'log');
  });
  afterEach('restoring the spy after each test', function() {
    consoleSpy.restore();
  });
  it('check if its called with the right args', function() {
    sendPaymentRequestToApi(100, 20);
    expect(console.log.withArgs('The total is: 120').calledOnce).to.be.true;
  });
  it('check if its called with the right args', function() {
    sendPaymentRequestToApi(10, 10);
    expect(console.log.withArgs('The total is: 20').calledOnce).to.be.true;
  });
});
