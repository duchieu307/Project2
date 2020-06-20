import {Router} from "express"
import * as Controller from "./UserController"
import {throwAsNext, requireLogin, authMiddleware} from "../../middleware"

const path = "/users"
const router = Router()

router.get("/me", authMiddleware,requireLogin,throwAsNext(Controller.getMe))

export default {path, router}