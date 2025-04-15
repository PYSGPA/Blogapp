import express from 'express';
import { saveComment, fetchComments } from '../controller/comment.controller.js';

const router = express.Router();

router.post('/add', saveComment);
router.get('/fetch', fetchComments);

export default router;