process.on('multipleResolves', (type, promise, reason) => {
    console.error(type, promise, reason)
    setImmediate(() => process.exit(1))
})

main = async () => {
    try {
        return new Promise((resolve, reject) => {
            resolve('First call')
            resolve('Second call')
            reject(new Error('Huuuary'))
        })
    } catch {
        throw new Error('Failed!')
    }
}

main().then(console.log)