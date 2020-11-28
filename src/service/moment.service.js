const database = require('../app/database')

const sqlFrament = `
SELECT
  moment.id AS id,
  moment.content AS content,
  moment.createTime AS createTime,
  moment.updateTIme AS updateTime,
  JSON_OBJECT('id', users.id, 'name', users. name) AS author
FROM
  moment
  LEFT JOIN users ON moment.user_id = users.id
`

class MonmentService {
  async create(userId, content) {
    const statement = 'INSERT INTO moment (user_id, content) VALUES (?, ?);'
    try {
      const result = await database.execute(statement, [userId, content])
      return result
    } catch (error) {
      console.error(error)
    }
  }

  // 获取某一条动态
  async getMomentById(momentId) {
    const statement = `${sqlFrament} moment.id =?;`
    try {
      const [result] = await database.execute(statement, [momentId])
      return result[0]
    } catch (error) {
      console.error(error)
    }
  }

  // 获取多个动态
  async getMoments(page, size) {
    page = String((Number(page) - 1) * 10)
    const statement = `${sqlFrament} LIMIT ?, ?;`
    const [result] = await database.execute(statement, [page, size])
    return result
  }
}

module.exports = new MonmentService()
