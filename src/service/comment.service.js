const database = require('../app/database')
class CommentService {
  // 插入评论
  async inserIntoComment(content, momentId, userId) {
    const statement = `INSERT INTO comment (content, moment_id, user_id) VALUES (?,?,?);`
    try {
      const [result] = await database.execute(statement, [content, momentId, userId])
      return result
    } catch (error) {
      console.log(error)
    }
  }

  // 插入回复评论
  async replyComment(content, momentId, commentId, userId) {
    const statement = `INSERT INTO comment (content, moment_id, comment_id, user_id) VALUES (?,?,?,?);`
    try {
      const [result] = await database.execute(statement, [content, momentId, commentId, userId])
      return result
    } catch (error) {
      console.log(error)
    }
  }

  // 更新评论
  async updateComment(commentId, content) {
    const statement = `	UPDATE comment SET content = ? WHERE id = ?;`
    try {
      const [result] = await database.execute(statement, [content, commentId])
      return result
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new CommentService()
