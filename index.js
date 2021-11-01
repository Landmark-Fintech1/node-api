const express = require('express')
const app = express()

app.get('/', (req, res, next) => {
  res.json({ message: "DeletifyBot is deploying you via Slack." })
  // res.json({ message: "Welcome to the API." })
})

const PORT = process.env.PORT || 9008
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
