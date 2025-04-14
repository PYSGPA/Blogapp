// import '../models/connection.js';
// import commentModel from '../models/comment.model.js'; // adjust path if needed

// // Save a new comment
// export const saveComment = async (req, res) => {
//   try {
//     const { email, content } = req.body;

//     if (!email || !content) {
//       return res.status(400).json({ message: 'Email and comment content are required.' });
//     }

//     const newComment = new commentModel({ email, content });
//     const savedComment = await newComment.save();

//     res.status(201).json({
//       message: 'Comment saved successfully!',
//       data: savedComment,
//     });
//   } catch (error) {
//     console.error('Error saving comment:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// // Fetch all comments
// export const fetchComments = async (req, res) => {
//   try {
//     const comments = await commentModel.find().sort({ createdAt: -1 }); // recent first
//     res.status(200).json(comments);
//   } catch (error) {
//     console.error('Error fetching comments:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// // Fetch comments by email
// export const fetchCommentsByEmail = async (req, res) => {
//   try {
//     const { email } = req.query;

//     if (!email) {
//       return res.status(400).json({ message: 'Email is required' });
//     }

//     const comments = await commentModel.find({ email }).sort({ createdAt: -1 });
//     res.status(200).json(comments);
//   } catch (error) {
//     console.error('Error fetching comments by email:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// // Delete a comment (optional)
// export const deleteComment = async (req, res) => {
//   try {
//     const commentId = req.params.id;

//     const deleted = await commentModel.findByIdAndDelete(commentId);

//     if (!deleted) {
//       return res.status(404).json({ message: 'Comment not found' });
//     }

//     res.status(200).json({ message: 'Comment deleted successfully' });
//   } catch (error) {
//     console.error('Error deleting comment:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };
