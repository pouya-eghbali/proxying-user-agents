const { patterns } = require('./ualib')

const isProxying = ua => {
  for (const pattern of patterns)
    if (ua.match(pattern)) return true
  return false
}

module.exports = isProxying