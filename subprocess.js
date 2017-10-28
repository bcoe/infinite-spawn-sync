require('fs').appendFileSync('./out.log', process.argv.join(' ') + '\n', 'utf8')
