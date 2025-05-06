import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './lib/db.js'
import postsRoute from './routes/post.routes.js'
import commentRoute from './routes/comment.routes.js'
dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(cors())
app.use('/posts', postsRoute)
app.use('/comments', commentRoute)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
  connectDB()
})
