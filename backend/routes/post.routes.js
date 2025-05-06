import express from 'express'
import Post from '../models/post.model.js'

const router = express.Router()

router.post('/add', async (req, res) => {
  const { title, body } = req.body

  const newPost = new Post({ title, body })

  newPost.save()

  res.status(201).json({
    _id: newPost._id,
    title: newPost.title,
    body: newPost.body,
  })
})

router.get('/all', async (req, res) => {
  const posts = await Post.find()

  res.status(200).json(posts)
})

export default router
