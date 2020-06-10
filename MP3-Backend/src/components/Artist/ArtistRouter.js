import { Router } from "express"
import * as controller from './ArtistController'
import { throwAsNext } from "../../middleware"

const path = "/artist"
const router = Router()

//get artist detail
router.get("/detail/:id", throwAsNext(controller.getArtistDetail))

export default { path, router }