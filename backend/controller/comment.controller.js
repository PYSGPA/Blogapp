import '../models/connection.js';
import CommentModel from '../models/comment.model.js';

export const saveComment = async (req, res) => {
  try {
    const comment = new CommentModel(req.body);
    await comment.save();
    res.status(201).json({ status: true, message: "Comment added!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, message: "Error adding comment" });
  }
};

export const fetchComments = async (req, res) => {
  try {
    const blogId = req.query.blogId;
    const comments = await CommentModel.find({ blogId }).sort({ createdAt: -1 });
    res.status(200).json(comments);
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false });
  }
};
