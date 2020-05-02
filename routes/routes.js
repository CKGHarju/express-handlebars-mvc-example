const express = require('express');
const homeController = require('../controllers/home');
const peopleController = require('../controllers/people');
const router = express.Router();

router.get('/', homeController);
router.get('/people', peopleController)

module.exports = router;
