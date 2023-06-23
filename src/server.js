import { __dirname } from "./path.js"
import express from "express"
import { connectMongo } from "./utils/connections.js"
import usersRouter from "./routers/users.routes.js"
import cors from 'cors';

const app = express()
const port = 3001

app.use(cors())
console.log("hola Mundo")
connectMongo()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(__dirname + "/public"))

//ENDPOINTS
app.use("/api/users", usersRouter)

app.get('*', (req, res) => {
    res.status(404).send({ status: "error", msg: 'ERROR: Esa ruta no existe', data: {} })
})


app.listen(port, () => console.log(`Servidor arriba en el puerto ${port} !!`))