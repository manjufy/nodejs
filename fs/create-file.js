const fs = require('fs')

fs.writeFile('fs/manju.js', "console.log('Hello Manju')", error => {
    if (error) console.error(error)

    console.log('File created successfully!')
})