import * as dbController from "./ArtistDAL"

export const getArtistDetail = async (req,res) => {
    const artist = await dbController.getArtistDetail(req.params.id)
    res.send(artist)
}