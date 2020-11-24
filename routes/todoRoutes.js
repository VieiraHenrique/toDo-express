const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers');

router.route('/').get(controllers.getToDos);

router.route('/add').post(controllers.postToDos);

router.route('/delete/:id').delete(controllers.deleteToDo);

module.exports = router;
