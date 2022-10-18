const { check } = require("express-validator");
const { validateResult } = require("./validateHelper.js");

const validatePostCarreras = [
  check("ID_Carrera").exists().not().isEmpty(),
  check("Nombre").exists().not().isEmpty(),
  check("Duracion").exists().not().isEmpty().isNumeric(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const validatePostGrupos = [
  check("ID_Grupo").exists().not().isEmpty(),
  check("Nombre").exists().not().isEmpty(),
  check("Grado").exists().not().isEmpty().isNumeric(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const validatePostHorarios = [
  check("ID_Horario").exists().not().isEmpty(),
  check("Hora").exists().not().isEmpty().isNumeric(),
  check("Dia").exists().not().isEmpty().isNumeric(),
  check("ID_Grupo").exists().not().isEmpty().isNumeric(),
  check("ID_Materia").exists().not().isEmpty().isNumeric(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const validatePostMaterias = [
  check("ID_Materia").exists().not().isEmpty(),
  check("Nombre").exists().not().isEmpty(),
  check("Grado").exists().not().isEmpty().isNumeric(),
  check("ID_Carrera").exists().not().isEmpty().isNumeric(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = {
  validatePostCarreras,
  validatePostGrupos,
  validatePostHorarios,
  validatePostMaterias
};
