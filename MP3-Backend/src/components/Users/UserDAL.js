import *  as dbdUlti from "../../util/databaseUtil"
const uuidv4 = require('uuid').v4

export const getMe = async (id) => {
    const sql = "SELECT id, name,avatar from users WHERE id = ?"
    const result = await dbdUlti.queryOne(sql, [id])
    return result
}