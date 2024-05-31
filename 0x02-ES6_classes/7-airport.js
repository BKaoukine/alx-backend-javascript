export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
    this.constructor.prototype.toString = () => `[object ${this._code}]`;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  set name(newName) {
    this._name = newName;
  }

  set code(newCode) {
    this._code = newCode;
  }
}
