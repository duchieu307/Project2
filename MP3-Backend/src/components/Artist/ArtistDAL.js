import * as dbUtil from "../../util/databaseUtil"

export const getArtistDetail = async (id) => {
    const sql = 'SELECT * FROM singers WHERE id = ?'
    const artist = await dbUtil.queryOne(sql, [id])
    return artist
}