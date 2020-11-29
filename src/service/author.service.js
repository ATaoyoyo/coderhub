const database = require('../app/database')

class AuthorService {
  // 用户是否能够修改动态
  async checkPermission(userId, momentId) {
    const statement = `SELECT * FROM moment WHERE id = ? AND user_id = ?;`
    try {
      const [result] = await database.execute(statement, [momentId, userId])
      return result.length > 0 ? true : false
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new AuthorService()
