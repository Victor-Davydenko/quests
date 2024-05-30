class UserApiError extends Error {
  constructor(public status: number, public message: string, public type: string = 'userError') {
    super(message);
    this.status = status;
    this.message = message;
    this.type = type;
  }

  static UserAlreadyExists() {
    return new UserApiError(400, 'error_user_exists');
  }

  static BadCredentials() {
    return new UserApiError(400, 'error_bad_credentials');
  }
}

export default UserApiError;
