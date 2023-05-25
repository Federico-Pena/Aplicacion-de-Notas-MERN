const express = require('express')
const app = express()
require("dotenv").config()
const cors = require("cors")
const path = require ("path")
const port = process.env.PORT || 4000
const UserSchema = require("./models/UserSchema")
const  NotasSchema = require( "./models/NotasSchema");
app.use(express.json())
app.use(cors())


app.use(express.static(path.join(__dirname, "../frontend","build")))

///////////////  OBTENER TODOS LOS USUARIOS  /////////////////  
app.get('/users', async (req, res) => {
await UserSchema.find()
.then(data => {
  res.send(data)})
})
///////////////  OBTENER UN LOS USUARIO  ///////////////// 
app.get('/users/:id',async (req, res) => {
  await UserSchema.findById(req.params.id)
  .then(data => {
    res.send(data)})
  })

  ///////////////  GUARDAR UN LOS USUARIOS  ///////////////// 
app.post("/users", async (req, res) => {
  const {nombre, autor, titulo, contenido} = req.body
  let user = new UserSchema({nombre:nombre, notas: []})
  await user.save().then(() => {
    res.status(200).send(user)
  })
})
///////////////  ELIMINAR UN LOS USUARIOS  ///////////////// 
app.delete("/users/:id", async (req, res) => {
await UserSchema.findByIdAndDelete(req.params.id).then(() => {
  res.send().status(200)
}) 
})



app.put("/users/:id", async (req, res) => {
  const {nombre, autor, titulo, contenido} = req.body
  await UserSchema.findByIdAndUpdate(req.params.id, {nombre:nombre, notas: []}).then(() => {
    res.send().status(200)
  })
})






app.listen(port, () => console.log(`http://localhost:${port}`))