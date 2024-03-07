export default class Currency {
  constructor(code, name) {
    if (typeof code === 'string' && typeof name === 'string') {
      this._name = name;
      this._code = code;
    }
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    }
  }

  set code(newCode) {
    if (typeof newCode === 'string') {
      this._code = newCode;
    }
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
