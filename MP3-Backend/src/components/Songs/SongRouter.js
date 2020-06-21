import { Router } from "express"
import * as controller from "./SongController"
import { throwAsNext, authMiddleware, requireLogin } from "../../middleware"

const path = "/song"
const router = Router()


//get song detail
//get new 
router.get("/new", throwAsNext(controller.getNewSong))
//get slide
router.get("/slide", throwAsNext(controller.getSlideSong))
//get song detail
router.get("/detail/:id",authMiddleware,throwAsNext(controller.getSongDetail))
//play music
router.get("/:id", throwAsNext(controller.getMP3))


export default { path, router }