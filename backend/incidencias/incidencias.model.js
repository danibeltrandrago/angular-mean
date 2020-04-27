const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const incidenciaSchema = new Schema ({
  title: { type: String, required: true},
  description: { type: String, required: true},
  create_date: { type: Date, required: true},
  act_date: { type: Date, required: true},
  level: { type: String, required: true},
  state: { type: Boolean, required: true},
  user: { type: String, required: true}
});

incidenciaSchema.set('toJSON', { virtuals: true });
module.exports = mongoose.model('Incidencias', incidenciaSchema);
