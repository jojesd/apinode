class RegisterDTO {
    constructor(username, password) {
      this.username = username;
      this.password = password;
    }
  }
  
  class LoginDTO {
    constructor(username, password) {
      this.username = username;
      this.password = password;
    }
  }
  
  module.exports = { RegisterDTO, LoginDTO };
  