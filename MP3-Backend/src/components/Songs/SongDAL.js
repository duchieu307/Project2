import * as dbUtil from "../../util/databaseUtil"

export const getMP3 = async (id) => {
    const sql = "SELECT url FROM songs WHERE id = ?"
    const result = await dbUtil.queryOne(sql, [id])
    console.log("url: ", result.url, "end")
    return result.url
}