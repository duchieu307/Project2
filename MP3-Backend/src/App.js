import express from "express"
import routers from "./components/router"

import bodyParser from "body-parser"
import errorHandler from "./middleware/errorHandler"

const app = express()
const port = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.send("OK")
})

app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb'
}))

for (const router of routers) {
    app.use(router.path, router.router)
}

// app.use(errorHandler)

app.listen(port, err => {
    if (err) {
        console.log(err)
    }
    console.log(`App listen at ${port}`)
})