const database = require('../app/database')

class userService {
  async create(user) {
    const { name, password } = user
    const statement = 'INSERT INTO users (name, password) VALUES (?, ?);'
    const result = await database.execute(statement, [name, password])
    return result
  }
}

module.exports = new userService()
