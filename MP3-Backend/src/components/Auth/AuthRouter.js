import {Router} from "express"
import * as controller from "./AuthController"
import {throwAsNext} from '../../middleware/errorHandler'

const path = '/auth'
const router = Router()

router.post("/signUp", throwAsNext(controller.signUp))
// router.post("/signUp",(req,res) => {
//     res.send(req.body)
// })

export default {path,router}