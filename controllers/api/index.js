const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRoutes');
const blogCommentRoutes = require('./blogCommentRoutes');

router.use('/users', userRoutes);
router.use('/blogs', blogRoutes);
router.use('/blogcomments', blogCommentRoutes);

module.exports = router;
