const { youtube } = require('../src/downloader')
const express = require('express');
const router = express.Router();

router.get('/youtube', youtube);

module.exports = router;