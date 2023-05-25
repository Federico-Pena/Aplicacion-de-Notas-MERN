const { Schema } = require("mongoose");
const mongoose = require("mongoose");
const UserSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
    
  },
  notas: [],
  creacion: {
    type: Date,
    default: Date.now,
  }
});
module.exports = mongoose.model("usuarios", UserSchema);
