const fs = require('fs')

const writeFilePromise = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, error => {
            if (error) reject(error)

            resolve('File created successfully with promise!')
        })
    })
}

writeFilePromise('fs/manju-promise.js', "console.log('Hello world with Promise')")
    .then(result => console.log(result))
    .catch(error => console.log(error))
