const express = require('express');
const router = express.Router();
const { scanLink } = require('../controllers/scanController');

router.post('/', scanLink);

module.exports = router;
