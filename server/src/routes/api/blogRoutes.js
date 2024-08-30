const express = require('express');
const createPost = require('../../controllers/createPost');
const readPost = require('../../controllers/readPost');
const router = express.Router();


router.post('/create-blog', createPost)
router.get('/read-blog', readPost)


module.exports = router;

