const fs = require('fs')
const util = require('util')

const writeFile = util.promisify(fs.writeFile)

writeFile('fs/manju-util-promisify.js', "console.log('Hello world with util promsity')")
    .then(() => console.log('File created successfully.'))
    .catch(error => console.log(error))