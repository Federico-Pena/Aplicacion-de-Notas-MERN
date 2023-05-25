const { Schema } = require("mongoose");
const mongoose = require("mongoose");
const NotasSchema = new Schema({
  autor: String,
  titulo: String,
  contenido: String,
  fecha:{
  type: Date,
  default: Date.now,
  },
});
module.exports = mongoose.model("notas", NotasSchema);