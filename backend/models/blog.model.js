import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const BlogSchema = mongoose.Schema({
  _id: Number,
  title: {
    type: String,
    required: [true,"Title is required"],
    trim: true
  },
  author: {
    type: String,
    required: [true,"Author is required"],
    trim: true
  },
  content: {
    type: String,
    required: [true,"Category name is required"],
    lowercase: true,
    trim: true
  },
  imagenm: {
    type: String,
    required: [true,"Product icon name is required"],
    trim: true
  },
  info:String
});

// Apply the uniqueValidator plugin to UserSchema.
BlogSchema.plugin(uniqueValidator);

// compile schema to model
const BlogSchemaModel = mongoose.model('product_collection',BlogSchema);

export default BlogSchemaModel