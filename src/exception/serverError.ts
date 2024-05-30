class ServerError extends Error {
  constructor(public status: number, public message: string, public type: string = 'serverError') {
    super(message);
    this.status = status;
    this.message = message;
    this.type = type;
  }

  static UnknownError() {
    return new ServerError(500, 'error_unknown');
  }
}

export default ServerError;
