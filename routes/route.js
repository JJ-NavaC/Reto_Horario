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

router.get("/Carreras", obtener_carreras);
router.get("/Grupos", obtener_grupos);
router.get("/Horarios", obtener_horarios);
router.get("/Materias", obtener_materias);
router.get("/Grupo/:id", obtener_grupo);

router.post("/Carreras", guardar_carrera);
router.post("/Grupos", guardar_grupo);
router.post("/Horarios", guardar_horario);
router.post("/Materias", guardar_materia);

module.exports = router;
