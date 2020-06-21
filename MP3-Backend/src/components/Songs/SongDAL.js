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

export const getSongDetail = async (id, userId = null) => {
    const sql = `SELECT S.id, singers.id as singerId,liked as likeNumber,
      S.image,S.name as nameSong,
      singers.name as singer 
      FROM songs S,singers,singer_song
      WHERE S.id = ?
      AND singers.id = singer_song.singerId
      AND singer_song.songId = S.id
    `;
    const getCateSql = `
      SELECT C.id,C.name
      FROM categories C, songs_categorie SC
      WHERE C.id = SC.categorieId
      AND SC.songId = ?
    `;
    const checkLiked = `
      SELECT userId FROM like_song
      WHERE userId = ?
      AND songId = ?
    `;
    const [result, categories] = await Promise.all([dbUtil.query(sql, [id]), dbUtil.query(getCateSql, [id])]);
    const songs = dbUtil.group(result.map(row => ({
      ...dbUtil.nested(row),
    })), 'id', 'singer', 'singerId');
    const songDetail = songs[0];
    songDetail.categories = [];
    categories.forEach((data) => {
      songDetail.categories.push({
        id: data.id,
        name: data.name,
      });
    });
    songDetail.liked = false;
    if (userId) {
      const checkLikedResult = await dbUtil.query(checkLiked, [userId, id]);
      if (checkLikedResult.length > 0) {
        songDetail.liked = true;
      }
    }
    return songs[0];
  };