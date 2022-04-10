const router = require('express').Router();
const { BlogComment } = require('../../models');
const withAuth = require('../../utils/auth');

// route for /api/blogcomments
router.post('/', withAuth, async (req, res) => {
    debugger;
    try {
        const newBlogComment = await BlogComment.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newBlogComment);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/', withAuth, async (req, res) => {
    try {
        const updatedBlogComment = await BlogComment.update({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(updatedBlogComment);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const blogCommentData = await BlogComment.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!blogCommentData) {
            res.status(404).json({ message: 'No blog comment found to delete with this id.  Please try again' });
            return;
        }

        res.status(200).json(blogCommentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
