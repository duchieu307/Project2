import { Router } from "express"
import * as controller from "./SongController"
import { throwAsNext } from "../../middleware"

const path = "/song"
const router = Router()


//get song detail
//get new 
router.get("/new", throwAsNext(controller.getNewSong))
//get slide
router.get("/slide", throwAsNext(controller.getSlideSong))
//play music
router.get("/:id", throwAsNext(controller.getMP3))


export default { path, router }