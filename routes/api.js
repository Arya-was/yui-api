const { youtube, tiktok, instagram, instagramStory, twitter, facebook, soundcloud } = require('../src/downloader')
const { nhread, nhdetail, nhartist, nhtag, nhhome, nhsearch, nhDl } = require('../src/other')
const express = require('express');
const router = express.Router();

router.get('/youtube', youtube);
router.get('/tiktok', tiktok);
router.get('/instagram', instagram);
router.get('/instagramStory', instagramStory);
router.get('/twitter', twitter);
router.get('/facebook', facebook);
router.get('/soundcloud', soundcloud);
router.get('/nhread/:path', nhread);
router.get('/nhdetail', nhdetail);
router.get('/nhartist', nhartist);
router.get('/nhtag', nhtag);
router.get('/nhhome', nhhome);
router.get('/nhsearch', nhsearch);
router.get('/nhDl/:path', nhDl);

module.exports = router;
