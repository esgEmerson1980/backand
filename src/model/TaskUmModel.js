const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const TaskUmSchema = new Schema({
  macaddress: {type: String, required: true},
  funcionario: {type: String, required: true},
  car: {type: String, required: false},
  placa: {type: String, required: false},
  combustivel: {type: String, required: true},
  litros: {type: Number, required: false},
  valor: {type: Number, required: false},
  origem: {type: String, required: true},
  kmInicio: {type: String, required: true},
  destino: {type: String, required: true},
  kmFinal: {type: String, required: true},
  description: {type: string, required: false},
  
  when: {type: Date, required: true},
  done: {type: Boolean, default: false},
  created: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('TaskUm', TaskUmSchema);