const { body, validationResult } = require('express-validator');

const validateAgentMiddleware = [
  body('name').isString().withMessage('Nome é obrigatório'),
  body('cpf').isString().withMessage('CPF é obrigatório').isLength({ min: 11, max: 11 }).withMessage('CPF inválido'),
  body('age').isInt({ min: 18 }).withMessage('Idade deve ser maior ou igual a 18'),
  body('email').isEmail().withMessage('Email inválido'),
  
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = validateAgentMiddleware;
