const express = require('express');
const router = express.Router()
const {addItem} = require('../controllers/fridgeController');

router.post('/items', addItem);

module.exports = router;