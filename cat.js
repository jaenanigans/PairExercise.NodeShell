const fs = require('fs');

module.exports = () => {
    process.stdin.on('data', (data) => {
        const cmd = data.toString().trim()
        if (cmd === 'cat'){
            fs.readFile('./', 'utf-8', (err, files) => {
                if (err) {
                    throw err
                } else {
                    process.stdout.write(files)
                    process.stdout.write('\nprompt >')
                }
            })
        }
    })
}
