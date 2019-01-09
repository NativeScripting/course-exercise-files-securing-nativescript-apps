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
    return res.json({ message: 'User logged in!' });
}
exports.loginUser = loginUser;
