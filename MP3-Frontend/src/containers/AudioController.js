import React, { useState, useEffect } from "react"
import ReactJkMusicPlayer from "react-jinke-music-player"
import { withRouter, Redirect } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { playSong, removeOldList } from "../actions/song"


const AudioController = (props) => {

    const [musicStatus, setMusicStatus] = useState({
        playIndex: 0,
        display: true
    })

    const dispatch = useDispatch()
    const song = useSelector(state => state.song)

    useEffect(() => {
        console.log("song o audio: ", song)
    })

    console.log(song)
    return (
        <div>
            <ReactJkMusicPlayer
                className="audioControl"
                audioLists={song.activeSong.map((song) => {
                    return {
                        name: song.nameSong,
                        singer: 'Sau này đặt sau',
                        musicSrc: `${process.env.REACT_APP_API_URL}/song/` + song.id,
                        cover: song.img
                    }
                })}
                defaultPlayIndex={song.activeSong.length - 1}
                mode="full"
            />
        </div>
    )

}

export default AudioController
