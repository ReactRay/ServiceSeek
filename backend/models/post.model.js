import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
  title: String,
  body: String,
})

const Post = mongoose.model('Post', PostSchema)

export default Post
