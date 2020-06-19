import * as dbController from './SongDAL'
import path from "path"



export const getSlideSong = async (req,res) => {
    const songs = await dbController.getSlideSong()
    res.send(songs)
}

export const getNewSong = async (req, res) => {
    const songs = await dbController.getListNewSong()
    res.send(songs)
}

export const getMP3 = async (req, res) => {
    const { id } = req.params
    console.log("song id: ", id)
    const url = await dbController.getMP3(id)

    // console.log(`hieu C:\\${url}thienthien`)
    // console.log(`url: ${url.substring(0, url.length - 1)} thiennn`)
    // console.log(url.length)
    res.sendFile("C:\\" + url.substring(0, url.length - 1))
    // try {
    //     res.sendFile("C:\\" + url.substring(0, url.length - 1))
    // } catch (error) {
    //     console.log("Loi", error)
    // }

    // res.sendFile(`${url}`, {root: path.join(__dirname,'../../../../MP3-Backend/Data/')})
    // res.sendFile(__dirname +  `..\\..\\..\\Data\\` + url)
}

