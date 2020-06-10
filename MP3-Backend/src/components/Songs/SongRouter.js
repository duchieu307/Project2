import {Router} from "express"
import * as controller from "./SongController"
import {throwAsNext} from "../../middleware"

const path = "/song"
const router = Router()

//play music
router.get("/:id",throwAsNext(controller.getMP3))
//get song detail
// router.get("/detail/:id")//

export default {path,router}