const Utils = require('./utils');

function sendPaymentRequestToApi (totalAmount, totalShipping) {
  const c = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${c}`);
}

module.exports = sendPaymentRequestToApi;
