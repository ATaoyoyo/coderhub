const database = require('../app/database')

class userService {
  async create(user) {
    const { name, password } = user
    const statement = 'INSERT INTO users (name, password) VALUES (?, ?);'
    const result = await database.execute(statement, [name, password])
    return result[0]
  }

  async getUserByName(name) {
    const statement = 'SELECT * FROM users WHERE name = ?;'
    const result = await database.execute(statement, [name])
    return result[0]
  }
}

module.exports = new userService()
