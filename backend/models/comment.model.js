import mongoose from 'mongoose';

const CommentSchema = mongoose.Schema({
  blogId: {
    type: Number,
    required: true
  },
  username: {
    type: String,
    required: true,
    trim: true
  },
  commentText: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const CommentModel = mongoose.model('comments_collection', CommentSchema);

export default CommentModel;