"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_access_1 = require("../../../app/data/data-access");
function registerUser(req, res) {
    var userData = {
        email: req.body.email,
        password: req.body.password
    };
    data_access_1.createUser(userData);
    return res.json({ message: 'User created!' });
}
exports.registerUser = registerUser;
function loginUser(req, res) {
    var user = data_access_1.getUser(req.body.email);
    if (user) {
        return res.json({ message: 'User logged in!' });
    }
    else {
        res.status(403).json({
            message: 'Wrong email or password.'
        });
    }
}
exports.loginUser = loginUser;
