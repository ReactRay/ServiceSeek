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

router.delete('/:id', async (req, res) => {
  const postId = req.params.id

  await Post.deleteOne({ _id: postId })

  res.status(200).json('deleted')
})

router.put('/:id', async (req, res) => {
  const postId = req.params.id
  const { title, body } = req.body

  console.log(title, body, postId, 'please work')

  const newPost = await Post.findByIdAndUpdate(
    postId,
    { title, body },
    {
      new: true,
    }
  )

  res.status(200).json(newPost)
})

export default router
