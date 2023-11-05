const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

router.get('/:id', reviewController.findReviewsById)
router.post('/:id', reviewController.postReviews);

module.exports = router;