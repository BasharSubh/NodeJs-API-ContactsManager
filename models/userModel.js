const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: [true, "please add a user name"]
    },
    email: {
        type: String,
        require: [true, "please add an email"],
        unique: [true, "email is already registered"]
    },
    password: {
        type: String,
        require: [true, "please add password"],
    },

}, {
    timestamps: true,
}
)


module.exports = mongoose.model("User", userSchema)