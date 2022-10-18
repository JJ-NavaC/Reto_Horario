const express = require("express");
const router = express();
const cors = require("cors");

router.use(cors());
router.use(express.json());

const {
  obtener_carreras,
  obtener_grupos,
  obtener_horarios,
  obtener_materias,
  guardar_carrera,
  guardar_grupo,
  guardar_horario,
  guardar_materia,
  obtener_grupo,
} = require("../controller/controller.js");

const {
  validatePostCarreras,
  validatePostMaterias,
  validatePostHorarios,
  validatePostGrupos,
} = require("../helpers/validators.js");

router.get("/Carreras", obtener_carreras);
router.get("/Grupos", obtener_grupos);
router.get("/Horarios", obtener_horarios);
router.get("/Materias", obtener_materias);
router.get("/Grupo/:id", obtener_grupo);

router.post("/Carreras", validatePostCarreras, guardar_carrera);
router.post("/Grupos", validatePostGrupos, guardar_grupo);
router.post("/Horarios", validatePostHorarios, guardar_horario);
router.post("/Materias", validatePostMaterias, guardar_materia);

module.exports = router;
