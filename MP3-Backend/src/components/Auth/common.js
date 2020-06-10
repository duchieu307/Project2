import * as bcryptUtil from "../../util/bcryptUtil"

export const checkPassword = async(password, passwordHash) => bcryptUtil.compare(password,passwordHash)
