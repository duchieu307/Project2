import * as dbAccess from "./AuthDAL"
import { hash } from "../../util/bcryptUtil"

export const signUp = async (req, res) => {
    const { username, password, name, rePassword } = req.body
    console.log(req.body)
    if (password != rePassword) {
        res.send("Sai repass")
        return
    }
    const passwordHash = hash(password)
    await dbAccess.signUp({username, passwordHash, name})
    res.send("Tao dc roi ah")
}