exports.id = 'index.js' // exports: { id: 'index.js' },
// module.exports = function () {}; // overrides the above exports.id and exports object now holds a function
exports = function () {}; // defaults to object, it does not assign a function to exports.
module.manju = {} // we can create a new properity in a module
console.log('In index', module)
console.log('Custom module', module.manju)
const util = require('./lib/util')
console.log('Util', util)
exports.data = 'Test'

setImmediate(() => {
    console.log('==================================================')
    console.log('The index.js module object is now loaded', module)
})