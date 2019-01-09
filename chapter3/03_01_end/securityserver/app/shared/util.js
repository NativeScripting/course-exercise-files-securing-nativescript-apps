"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bcryptjs_1 = require("bcryptjs");
function hashPassword(password) {
    var salt = bcryptjs_1.genSaltSync(12);
    var hashedPassword = bcryptjs_1.hashSync(password, salt);
    return hashedPassword;
}
exports.hashPassword = hashPassword;
function verifyPassword(passwordAttempted, hashedPassword) {
    return bcryptjs_1.compareSync(passwordAttempted, hashedPassword);
}
exports.verifyPassword = verifyPassword;
exports.newGuid = function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};
