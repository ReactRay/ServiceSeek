// models/post.model.js
import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
  title: String,
  body: String,
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
})

const Post = mongoose.model('Post', PostSchema)

export default Post
