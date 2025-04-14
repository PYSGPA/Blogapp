import express from 'express';
import * as commentController from '../controller/comment.controller.js'; // adjust path as needed

const router = express.Router();

// Route to save a new comment
router.post('/save', commentController.saveComment);

// Route to fetch all comments
router.get('/fetch', commentController.fetchComments);

// Optionally, fetch comments by user email (for logged-in user)
router.get('/fetchByEmail', commentController.fetchCommentsByEmail);

// Optionally, delete a comment by its ID
router.delete('/delete/:id', commentController.deleteComment);

export default router;
