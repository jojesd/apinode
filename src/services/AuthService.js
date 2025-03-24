const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { RegisterDTO, LoginDTO } = require("../dtos/AuthDTO");
const UserRepository = require("../repositories/UserRepository");

class AuthService {
  async register({ username, password }) {
    const existingUser = await UserRepository.findUserByUsername(username);
    if (existingUser) throw new Error("Usuário já existe");

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await UserRepository.createUser(username, hashedPassword);

    return { message: "Usuário registrado!", user };
  }

  async login({ username, password }) {
    const user = await UserRepository.findUserByUsername(username);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error("Credenciais inválidas");
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    return { message: "Login bem-sucedido", token };
  }
}

module.exports = new AuthService();
