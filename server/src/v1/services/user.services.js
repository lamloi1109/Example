'use strict';

// Models
const _users = require('../models/users.models');
// Services

// Utils
var that = module.exports = {
    createUser: async({
        userId, username, password, email
    }) => {
        const user = new _users({userId, username, password, email});
        return await user.save();
    }
}
