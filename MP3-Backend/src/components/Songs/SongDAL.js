import * as dbUtil from "../../util/databaseUtil"

export const getMP3 = async (id) => {
    const sql = "SELECT url FROM songs WHERE id = ?"
    const result = await dbUtil.queryOne(sql, [id])
    // console.log("url: ", result.url, "end")
    return result.url
}

export const getSlideSong = async () => {
    const sql = `SELECT songs.id, coverImg, image, songs.name as songName,singers.name as singer 
    FROM songs, singers, singer_song
    WHERE coverImg IS NOT NULL
    AND singers.id = singer_song.singerId
    AND singer_song.songId = songs.id
    `
    const result = await dbUtil.query(sql)
    const songs = dbUtil.group(result.map(row => ({
        ...dbUtil.nested(row),
    })), 'id', 'singer')
    return songs
}

export const getListNewSong = async () => {
    const sql = `SELECT songs.id,image,songs.name as songName, singers.name as singer
    FROM songs, singer_song,singers
    WHERE singers.id = singer_song.singerId
    AND singer_song.songId = songs.id
    ORDER BY RAND()
    LIMIT 25   
    `
    const result = await dbUtil.query(sql)
    const songs = dbUtil.group(result.map(row => ({
        ...dbUtil.nested(row)
    })), 'id', 'singer')
    return songs
}