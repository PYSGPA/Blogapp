import express from 'express';
import Comment from '../models/comment.model.js';

const router = express.Router();

// GET comments for a specific blog
router.get('/:blogId', async (req, res) => {
  try {
    const comments = await Comment.find({ blogId: req.params.blogId }).sort({ date: -1 });
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch comments' });
  }
});

// POST a new comment
router.post('/', async (req, res) => {
  const { blogId, text } = req.body;
  if (!blogId || !text) return res.status(400).json({ error: 'Missing fields' });

  try {
    const newComment = new Comment({ blogId, text });
    const saved = await newComment.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add comment' });
  }
});

export default router;