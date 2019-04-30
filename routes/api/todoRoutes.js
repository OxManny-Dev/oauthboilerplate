const router = require("express").Router();
const userController = require('./../../controllers/user');
const db = require('./../../models');

router.route('/')
    .get(userController.getTodos)
    .post(userController.addTodo)


module.exports = router;
