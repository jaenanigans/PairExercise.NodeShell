const fs = require('fs');

module.exports = () => {
    fs.readdir('./', 'utf-8', (err, data) => {
        if (err){
            done(err.stack)
        } else {
            done(data.join('\n'))
        }
    });
};