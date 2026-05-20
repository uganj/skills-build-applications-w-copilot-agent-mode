import express from 'express'
import mongoose from 'mongoose'

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 8000
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/octofit'

mongoose
  .connect(MONGO_URL)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error', err))

app.get('/health', (req, res) => res.json({ status: 'ok' }))

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
