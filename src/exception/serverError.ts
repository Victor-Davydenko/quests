class ServerError extends Error {
  constructor(public status: number, public digest: string, public type: string = 'serverError') {
    super(digest);
    this.status = status;
    this.type = type;
    this.digest = digest;
  }

  static UnknownError() {
    return new ServerError(500, 'error_unknown');
  }
}

export default ServerError;
