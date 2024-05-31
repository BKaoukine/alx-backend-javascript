export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (
      this.constructor !== Building
        && !('evacuationWarningMessage' in this.constructor.prototype)
    ) {
      throw new TypeError(
        'Class extending Building must override evacuationWarningMessage',
      );
    }
  }

  set sqft(sq) {
    this._sqft = sq;
  }

  get sqft() {
    return this._sqft;
  }
}
