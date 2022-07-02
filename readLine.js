const readLine = require('readline')

const reader = readLine.createInterface({
    input: process.stdin,
    output: process.stdout

})

reader.question('What is your name? ', function(name) {
    console.log(`Hi, ${name}`)
    reader.close()
})