const express = require('express');
const { errorHandler } = require('./middleware/error');
const app = express();
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(errorHandler)

app.use('/api/posts', require('./controllers/postsController'))

module.exports = app