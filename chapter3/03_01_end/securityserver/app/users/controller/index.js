"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_access_1 = require("../../../app/data/data-access");
var util_1 = require("../../../app/shared/util");
function registerUser(req, res) {
    var hashedPassword = util_1.hashPassword(req.body.password);
    var userData = {
        email: req.body.email,
        password: hashedPassword
    };
    data_access_1.createUser(userData);
    return res.json({ message: 'User created!' });
}
exports.registerUser = registerUser;
function loginUser(req, res) {
    var user = data_access_1.getUser(req.body.email);
    if (user) {
        var passwordMatches = util_1.verifyPassword(req.body.password, user.password);
        if (passwordMatches) {
            return res.json({ message: 'User logged in!' });
        }
        else {
            res.status(403).json({
                message: 'Wrong email or password.'
            });
        }
    }
    else {
        res.status(403).json({
            message: 'Wrong email or password.'
        });
    }
}
exports.loginUser = loginUser;
