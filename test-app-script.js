const { exec, execSync } = require('child_process')
const fs = require('fs')
const options = require('minimist')(process.argv.slice(2))
const platformConfig = require('./cypress/config')

const { copyFileSync, existsSync, mkdirSync, rmSync } = fs
const tests = platformConfig[options.platform][options.type]
const integrationPath = './cypress/integration'

console.info(`\n 💻  Preparing tests for ${options.platform} ${options.type} \n`)

try {
  rmSync(`${integrationPath}`, { force: true, recursive: true })

  tests.forEach(test => {
    const directory = test.split('/')[0]
    const testFilename = `${test}.spec.js`
    const testPath = `${integrationPath}/${directory}`

    if (!existsSync(testPath)){
      mkdirSync(testPath, { recursive: true })
    }

    copyFileSync(`./cypress/tests/${testFilename}`, `${integrationPath}/${testFilename}`)
  })

  console.info(`\n 💚  ${options.platform} ${options.type} tests are ready 🚀 \n`)

  const mode = options.type === 'sanity' ? 'run' : 'open'
  execSync(`yarn cypress ${mode}`, { cwd: __dirname, stdio: 'inherit' })
} catch (err) {
  console.error('🔴  Error', { err })
}
