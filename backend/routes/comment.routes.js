import express from 'express'
import Post from '../models/post.model.js'
import Comment from '../models/comment.model.js'

const router = express.Router()

router.post('/:id', async (req, res) => {
  const postId = req.params.id

  const { comment } = req.body

  const newComment = new Comment({ post: postId, content: comment })

  await newComment.save()

  await Post.findByIdAndUpdate(postId, {
    $push: { comments: newComment._id },
  })

  res
    .status(201)
    .json({
      _id: newComment._id,
      content: newComment.content,
      post: newComment.post,
    })
})

export default router
