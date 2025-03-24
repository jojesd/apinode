const User = require("../models/User");

class UserRepository {
  async createUser(username, password) {
    return await User.create({ username, password });
  }

  async findUserByUsername(username) {
    return await User.findOne({ where: { username } });
  }
}

module.exports = new UserRepository();
