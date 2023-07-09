const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require('dotenv').config()
const connectDb = require('./config/dbConnection')

const PORT = process.env.PORT || 5000;
const app = express()


connectDb()

app.use(express.json())


app.use('/api/contacts', require('./routes/contactRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})