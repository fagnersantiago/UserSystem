
export default class APPErros {
  constructor(message, err = Error, statusCode = 400) {
    this.message = message;
    this.err = err;
    this.statusCode = statusCode;
  }
}
