import express from "express"

import routes from "./routes"


const PORT = 3001
const app = express()

app.use(express.json())

app.use(function(_req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000") // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
  })

app.use("/api/items", routes)

// 404 catch all.
app.use(function (req, res) {
  res.status(404).send("Error: 404 Not Found " + req.path)
})

app.listen(PORT, () => {
  console.log(`Server runnig on port ${PORT}`)
})
