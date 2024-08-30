const express = require('express');
const router = express.Router();
const blogRoutes = require('../api/blogRoutes')

router.use('/blog-posts', blogRoutes)

module.exports = router;