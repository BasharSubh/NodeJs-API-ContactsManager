const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require('dotenv').config()
const connectDb = require('./config/dbConnection')
const cors = require('cors')

const PORT = process.env.PORT || 5000;
const app = express()

app.use(cors());


connectDb()

app.use(express.json())


app.use('/api/contacts', require('./routes/contactRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

// app.all('*', (req, res, next) => {
//   res.status(404);
//   next(new Error('Route not found'));
// });

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})
