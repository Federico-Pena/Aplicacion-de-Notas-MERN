const { Schema } = require("mongoose");
const mongoose = require("mongoose");
const NotasSchema = require("./NotasSchema");
const UserSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
    
  },
  notas: {
    type: Array,
    default: [],
  },
  creacion: {
    type: Date,
    default: Date.now,
  },
  foto: String
});
module.exports = mongoose.model("usuarios", UserSchema);
