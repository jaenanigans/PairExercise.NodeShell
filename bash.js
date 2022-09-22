const pwdCommand = require('./pwd')
const lsCommand = require('./ls')
const catCommand = require ('./cat')
const curlCommand = require('./curl')

//Output a prompt
process.stdout.write('prompt >');


pwdCommand();
lsCommand();
catCommand();
curlCommand();