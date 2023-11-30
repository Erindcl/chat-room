const express = require('express')
const app = express()
const db = require('./models/index')
const userRouter = require('./routes/userRoutes')
const port = 8899


// databse
db.sequelize.sync()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/auth', userRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})