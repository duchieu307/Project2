import * as dbAccess from "./AuthDAL"
import { hash } from "../../util/bcryptUtil"
import * as common from "../Auth/common"

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

export const login = async (req,res) => {
    const {username,password} = req.body
    console.log(req.body)
    const user = await dbAccess.getUserByUsername(username)
    if (user){
        const passwordValid = await common.checkPassword(password,user.password)
        console.log(user.password)
        if (passwordValid) {
            res.send("Log in")
        } else {
            res.send("Wrong password")
        }
    } else {
        res.send("User not found")
    }

}