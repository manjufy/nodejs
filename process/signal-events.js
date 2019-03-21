// Beging reading from stdin so the process doesn't exit
process.stdin.resume()

process.on('SIGINT', () => {
    console.log('Received Signal, Press ctrl+D to exit.')
})

function handle(signal) {
    console.log(`Received ${signal}`)
}

process.on('SIGINT', handle)
process.on('SIGTERM', handle)