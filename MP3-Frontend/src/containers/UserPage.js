import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { axiosAuth } from "../utils/axios"
import { playSong } from "../actions/song"
import UserPageUI from "../components/UserPage"
import { useParams } from "react-router"

const UserPage = (props) => {

    let { id } = useParams()

    const [state, setState] = useState()

    async function getListSong(id) {
        const axios = await axiosAuth()
        const result = await axios.get("/song/like")
        setState(prevState => ({
            ...prevState,
            listSong: result.data
        }))
    } 
    
    useEffect(() => {
        getListSong(id)
    },[]) //componentDidMount

    return (
        <UserPageUI data={state} />
    )
}

export default UserPage