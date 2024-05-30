/* eslint no-underscore-dangle: 0 */

export default class Currency {
  constructor(code, name) {
    this._name = name;
    this._code = code;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  set code(newCode) {
    if (typeof newCode === 'string') this._code = newCode;
  }

  set name(newName) {
    if (typeof newName === 'string') this._name = newName;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
