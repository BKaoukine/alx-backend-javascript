function calculateNumber (a, b) {
  const ra = Math.round(a);
  const rb = Math.round(b);
  const c = ra + rb;
  return c;
}

module.exports = calculateNumber;
