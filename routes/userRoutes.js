const express = require('express');
const validateToken = require('../middleware/validateTokenHandler')
const router = express.Router()


const {registerUser, userLogging, currentUser} = require('../controllers/userController')


router.post('/register',registerUser )

router.post('/login', userLogging)

router.get('/current', validateToken, currentUser )


module.exports =  router