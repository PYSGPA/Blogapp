import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    ref: 'User', // optional: if you want to link with the User collection
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

export default mongoose.model('Comment', commentSchema);
