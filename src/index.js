import express from 'express'

const app = express()
const PORT = process.env.PORT || 3000
const user = [
  { id: 1, name: 'sankha' },
  { id: 2, name: 'sankha2' },
  { id: 3, name: 'sankha3' }
]

app.get('/', (req, res) => {
  res.statusCode = 200
  res.json(user)
})

app.listen(PORT, () => {
  console.log(`Our Server is Running this port ${PORT}`)
})

export default app
