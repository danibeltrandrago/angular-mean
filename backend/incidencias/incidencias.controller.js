const express = require('express');
const router = express.Router();
const incidenciaService = require('./incidencias.service');

router.get('/', getAll);
router.get('/:username', getByUsername);
router.post('/add', add);
router.delete('/:id', _delete);
router.put('/', close);
router.get('/inform', getAll);

module.exports = router;

function getAll(req, res, next) {
  console.log("Get All");
  incidenciaService.getAll()
    .then( incidencia => res.json(incidencia))
    .catch(err => next(err));
}

function getByUsername(req, res, next) {
  incidenciaService.getByUsername(req.params.username)
    .then(incidencia => incidencia ? res.json(incidencia) : res.sendStatus(404))
    .catch(err => next(err));
}

function add(req, res, next) {
  incidenciaService.add(req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}

function _delete(req, res, next) {
  incidenciaService.delete(req.params.id)
    .then(() => res.json({}))
    .catch(err => next(err));
}

function close(req, res, next) {
  console.log("Hello");
  incidenciaService.close(req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}

function getByDate(req, res, next) {
  console.log("Get All");
  incidenciaService.getAll()
    .then( incidencia => res.json(incidencia))
    .catch(err => next(err));
}
