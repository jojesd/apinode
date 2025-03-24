const AuthService = require("../services/AuthService");

exports.register = async (req, res) => {
  try {
    const response = await AuthService.register(req.body);
    res.json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const response = await AuthService.login(req.body);
    res.json(response);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};
