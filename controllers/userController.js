const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const registerUser = asyncHandler(async (req, res) => {

    const { username, email, password } = req.body
    
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("please fill all the data")
    } 

    const userAvailability = await User.findOne({ email })
    
    if (userAvailability) {
        res.status(400);
        throw new Error("email is already registered")
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
        username,
        password: hashedPassword,
        email
    })

    if (user) {
        res.status(201).json({ _id: user.id, username: user.username, email: user.email})
    } else {
        res.status(400)
        throw new Error("something wrong")
    }

})

const userLogging = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400);
      throw new Error("All fields are mandatory!");
    }
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const accessToken = jwt.sign(
        {
          user: {
            username: user.username,
            email: user.email,
            id: user.id,
          },
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "15m" }
      );
      res.status(200).json({ accessToken });
    } else {
      res.status(401);
      throw new Error("email or password is not valid");
    }
});
  

const currentUser = asyncHandler(async (req, res) => {
    res.json(req.user)
})


module.exports = {registerUser, userLogging, currentUser}