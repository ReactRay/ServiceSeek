import express from 'express'
import cors from 'cors'
const app = express()
const PORT = 3000

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello from Express + TypeScript!')
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
