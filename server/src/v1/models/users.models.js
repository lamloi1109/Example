const moongoose = require('mongoose');

const UserSchema = new moongoose.Schema({
    userId:{
        type: Number, required: true, unique: true
    },
    username: {
        type:String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    }
});

module.exports = moongoose.model('users',UserSchema);