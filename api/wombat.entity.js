const { entity } = require('@snowdog/wombat')
const content = require('../wombat.db.json')
const config = require('../wombat.config.js')
const isDev = require('../is-dev')

module.exports = entity(content, config, isDev)
