export default class Currency {
  constructor(code, name) {
    if (typeof code === 'string' && typeof name === 'string') {
      this._name = name;
      this._code = code;
    }
  }

  get getName() {
    return this._name;
  }

  get getCode() {
    return this._code;
  }

  set setName(newName) {
    if (typeof name === 'string') {
      this._name = newName;
    }
  }

  set setCode(newCode) {
    if (typeof code === 'string') {
      this._code = newCode;
    }
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
