const express = require('express')
const app = express()

app.get('/', (req, res, next) => {
  res.send({ message: "Welcome to the API." })
})

app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use((error, req, res, next) => {
  console.error(error) // log an error

  if (app.get('env') == 'dev') {
    throw error
  }

  res.status(error.status || 500).send({
    status: error.status || 500,
    message: error.message || 'Internal Server Error'
  })
})

const PORT = process.env.PORT || 80
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
