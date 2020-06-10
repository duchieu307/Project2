import * as dbUtil from "../../util/databaseUtil"

export const getAlbumDetail = async (id) => {
   const sql = ` SELECT albums.id, albums.name as albumName, albums.img,
   singers.name as singer, singers.id as singerId
   FROM albums, singer_album, singers
   WHERE albums.id = singer_album.albumId
   AND singers.id = singer_album.singerId
   AND albums.id = ?
   `
   const result = await dbUtil.queryOne(sql,[id])
   return result
}