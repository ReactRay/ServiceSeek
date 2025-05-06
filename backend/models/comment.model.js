import mongoose from 'mongoose'

const CommentSchema = new mongoose.Schema({
  content: String,
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
  },
})

const Comment = mongoose.model('Comment', CommentSchema)

export default Comment
