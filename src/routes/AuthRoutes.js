const express = require("express");
const { register, login } = require("../controllers/AuthController");

const router = express.Router();

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
*/
router.post("/register", register);

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
*/
router.post("/login", login);

module.exports = router;
