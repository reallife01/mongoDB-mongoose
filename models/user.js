const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        require: true,
    },
    roles: {
        user: {
            type: Number,
            default: 4000,
        },
        Admin: Number,
        Editor: Number,
    },

    password: {
        type: String,
        require: true
    },
    refreshToken: String
});


// or 
// module.exports = mongoose.model('user', userSchema)


const user = mongoose.model('user', userSchema)
module.exports = user
