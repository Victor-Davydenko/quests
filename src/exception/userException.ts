class UserApiError extends Error {
  constructor(public status: number, public digest: string, public type: string = 'userError') {
    super(digest);
    this.status = status;
    this.type = type;
    this.digest = digest;
  }

  static UserAlreadyExists() {
    return new UserApiError(400, 'error_user_exists');
  }

  static BadCredentials() {
    return new UserApiError(400, 'error_bad_credentials');
  }
}

export default UserApiError;
