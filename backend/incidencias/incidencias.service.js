const config = require('../config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../_helpers/db');
const incidencia = db.Incidencia

module.exports = {
  getAll,
  add,
  getByUsername,
  delete: _delete,
  close,
  getByDate
}

async function getAll() {
  return await incidencia.find().sort({state:-1, act_date:-1}).select();
}

async function getByUsername(username) {
  return await incidencia.find({'user': username}).select();
}

async function add(instanciaParam) {
  const instancia = new incidencia(instanciaParam);
  await instancia.save();
}

async function _delete(id) {
  await incidencia.findByIdAndRemove(id);
}

async function close(instanciaParam) {
  await incidencia.findByIdAndUpdate(instanciaParam.id, {$set: instanciaParam});
}

async function getByDate () {
  console.log("Count");
  return await incidencia.aggregate([
    {
      $group: {
        _id: { $dateToString: { format: "%Y-%m", date: "$create_date"}}
      }
    }
  ]).count();
}
