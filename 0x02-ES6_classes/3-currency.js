export default class Currency {
  constructor(code, name) {
    this._name = name;
    this._code = code;
  }

  get getName() {
    return this._name;
  }

  get getCode() {
    return this._code;
  }

  set setName(name) {
    this._name = name;
  }

  set setCode(code) {
    this._name = code;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
