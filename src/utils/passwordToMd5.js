const crypto = require('crypto')

const md5Password = (password) => {
  const hash = crypto.createHash('md5')
  const result = hash.update(password).digest('hex')
  return result
}

module.exports = md5Password
