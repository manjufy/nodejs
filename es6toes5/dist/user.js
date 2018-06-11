"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = userService;
function userService() {
    function getUser() {
        return {
            name: "Manjunath",
            team: "Redbull"
        };
    }

    return {
        getUser: getUser
    };
}