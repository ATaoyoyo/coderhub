const database = require('../app/database')

class CommentService {
  async inserIntoComment(content, momentId, userId) {
    const statement = `INSERT INTO comment (content, moment_id, user_id) VALUES (?,?,?);`
    try {
      const [result] = await database.execute(statement, [content, momentId, userId])
      return result
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new CommentService()
