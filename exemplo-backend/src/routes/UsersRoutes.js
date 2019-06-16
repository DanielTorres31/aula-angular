const express = require('express');
const router = express.Router();
var cors = require('cors');
const controller = require('../controllers/UsersController');

router.route('/')
  .post(controller.inserirUsuario)
  .get(controller.buscarUsuarios);

module.exports = router;
