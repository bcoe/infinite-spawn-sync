const sw = require('spawn-wrap')
const spawnSync = require('child_process').spawnSync

sw.runMain()
console.log('run spawnSync')
const result = spawnSync(process.execPath, [require.resolve('./subprocess')], {
  env: process.env
})
console.log(result)
