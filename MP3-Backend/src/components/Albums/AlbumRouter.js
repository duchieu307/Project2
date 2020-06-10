import { Router } from "express"
import * as controller from "./AlbumController"
import { thowAsNext, throwAsNext } from "../../middleware"

const path = "/album"
const router = Router()

////
//get album detail
router.get("/:id", throwAsNext(controller.getAlbumDetail))

export default { path, router }