var express = require('express');
var router = express.Router();
var peopleController = require('../controllers/people');

router.route('/')
      .get(peopleController.index)
      .put(peopleController.edit);

router.route('/new')
      .get(peopleController.new);

router.route('/edit')
      .get(peopleController.show)
      .put(peopleController.edit)
      .delete(peopleController.delete);

router.route('/:id/edit')
      .get(peopleController.edit);

module.exports = router;
