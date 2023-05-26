const express = require('express')
const app = express()
require("dotenv").config()
const cors = require("cors")
const path = require ("path")
const port = process.env.PORT || 4000
const UserSchema = require("./models/UserSchema")
const  NotasSchema = require( "./models/NotasSchema");
const { log } = require('console')
app.use(express.json())
app.use(cors({origin: "*"}))



app.use(express.static(path.join(__dirname, "../frontend","build")))

///////////////  OBTENER TODOS LOS USUARIOS  /////////////////  
app.get('/usuarios', async (req, res) => {
await UserSchema.find()
.then(data => {
  res.json(data)})
})
///////////////  OBTENER UN USUARIO  ///////////////// 
app.get('/usuarios/:id',async (req, res) => {
  await UserSchema.findById(req.params.id)
  .then(data => {
    res.json(data)})
  })

  ///////////////  GUARDAR UN LOS USUARIOS  ///////////////// 
app.post("/usuarios", async (req, res) => {
  const {nombre, foto, autor, titulo, contenido} = req.body
  let nota = new NotasSchema({autor, titulo, contenido})
  let user = new UserSchema({nombre:nombre, foto: foto || "https://th.bing.com/th/id/R.b6cde81d1c489b0e20d85a6e06c5f8f9?rik=Hm5NlMU0Lxqi%2bw&pid=ImgRaw&r=0", notas: [nota]})
  await user.save().then(() => {
    res.status(200).send(user)
  })
})
///////////////  ELIMINAR UN LOS USUARIOS  ///////////////// 
app.delete("/usuarios/:id", async (req, res) => {
await UserSchema.findByIdAndDelete(req.params.id).then(() => {
  res.send().status(200)
}) 
})



///////////////  AGREGAR UNA NUEVA NOTA A UN USUARIO  ///////////////// 
app.put("/usuarios/notas/:id", async (req, res) => {
  const {nombre, autor, titulo, contenido} = req.body
  let nota = new NotasSchema({autor, titulo, contenido})
  await UserSchema.findByIdAndUpdate(req.params.id, { $push: {"notas": nota} }).then(() => {
    res.send(nota).status(200)
  })
})

///////////////  ACTUALIZAR ME GUSTA  /////////////////
app.put("/usuarios/notas/:idUser/:idNota", async (req, res) => {
  const { meGusta } = req.body
  const id = req.params.idNota
  await UserSchema.findById(req.params.idUser)
  .then((response) => {
    let notaFiltrada = response.notas.filter((nota) => {
      if (nota._id == id) {
        return nota
      }
    })
    let arraySinNota = response.notas.filter((nota) => {
      if (nota._id != id) {
        return nota
      }
    })
    notaFiltrada.meGusta += parseInt(meGusta)
    arraySinNota.push(...notaFiltrada)
    UserSchema.findByIdAndUpdate(req.params.id, { $push: {"notas": [...arraySinNota]} })
    res.send(arraySinNota).status(200)
  })
 
})







app.listen(port, () => console.log(`http://localhost:${port}`))