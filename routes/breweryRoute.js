const express = require('express');
const router = express.Router();
const breweryController = require('../controllers/breweryController');

router.get('/', breweryController.brewerySearch);
router.get('/:id', breweryController.findBreweryById);

module.exports = router;