const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
})

// Secure the password with the bcrypt
userSchema.pre('save', async function(next){
    console.log("pre method", this);
    const user = this;

    // if password is not modified
    if(!user.isModified("password")){
        next();
    }

    // if password is modified
    try {
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, saltRound);
        user.password = hash_password;
    } catch(error) {
        next(error);
    }
});

// define the model or the collection name.
const User = new mongoose.model("User", userSchema);

module.exports = User;