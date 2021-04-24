const express = require('express')
const app = express()
const db = require('./db')

app.get('/', (req, res, next) => {
  res.json({ message: "Welcome to the API." })
})

app.get('/products', async (req, res, next) => {
  try {
    res.json({ products: await db.products })
  } catch {
    res.json({ error: 'database is not connected!!!' })
  }
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

    res.status(error.status || 500).send({
      status: error.status || 500,
      message: error.message || 'Internal Server Error'
    })

  } else {
    res.status(404).json({
      message: `${req.url} not found`
    })

    res.status(500).json({
      message: 'Internal Server Error'
    })
  }

})

const PORT = process.env.PORT || 9008
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
