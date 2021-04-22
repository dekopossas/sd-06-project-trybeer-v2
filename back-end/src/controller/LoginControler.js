const { Router } = require('express');
<<<<<<< HEAD
const rescue = require('express-rescue');
const LoginService = require('../service/LoginService');
=======
const { users } = require('../../models');
>>>>>>> 8ca1e61d5e965c6135bae5aceefeec15b69cd346
const createToken = require('../authentication/createToken');

const router = new Router();

const OK = 200;
const BAD_REQUEST = 404;

router.post('/', rescue(async (req, res) => {
  try {
    const user = req.body;

    const { role, email, name, password } = await users.findOne({ where: {
      email: user.email,
    } });

    if (user.email === email && user.password === password) {
      const token = await createToken({ user: { email }, role });

      return res.status(OK).json({ token, role, name, email });
    }

    return res.status(BAD_REQUEST).json({ message: 'Wrong password' });
  } catch (error) {
    return res.status(BAD_REQUEST).json({ message: 'User not found or wrong email' });
  }
}));

module.exports = router;
