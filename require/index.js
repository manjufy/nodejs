module.exports = function () {}; // exports object holds a function
exports = function () {}; // defaults to object, it does not assign a function to exports.
module.manju = {}
console.log('In index', module)
console.log('Module', module.manju)
require('./lib/util')