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

  set setName(name) {
    if (typeof name === 'string') {
      this._name = name;
    }
  }

  set setCode(code) {
    if (typeof code === 'string') {
      this._code = code;
    }
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
