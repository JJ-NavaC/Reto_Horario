const pool = require("../config/database.js");

const obtener_carreras = async (req, res) => {
  await pool.getConnection().then(async (conn) => {
    try {
      const query = await conn.query("SELECT * FROM Carrera");
      console.log(query);

      res.status(201).json({
        ok: true,
        mensaje: query,
      });
      conn.end();
    } catch (error) {
      res.status(500).json({
        ok: false,
        mensaje: "Algo salio mal :(",
      });
      conn.end();
    }
  });
};

const obtener_grupos = async (req, res) => {
  await pool.getConnection().then(async (conn) => {
    try {
      const query = await conn.query("SELECT * FROM Grupo");
      console.log(query);

      res.status(201).json({
        ok: true,
        mensaje: query,
      });
      conn.end();
    } catch (error) {
      res.status(500).json({
        ok: false,
        mensaje: "Algo salio mal :(",
      });
      conn.end();
    }
  });
};

const obtener_horarios = async (req, res) => {
  await pool.getConnection().then(async (conn) => {
    try {
      const query = await conn.query("SELECT * FROM Horario");
      console.log(query);

      res.status(201).json({
        ok: true,
        mensaje: query,
      });
      conn.end();
    } catch (error) {
      res.status(500).json({
        ok: false,
        mensaje: "Algo salio mal :(",
      });
      conn.end();
    }
  });
};

const obtener_materias = async (req, res) => {
  await pool.getConnection().then(async (conn) => {
    try {
      const query = await conn.query("SELECT * FROM Materia");
      console.log(query);

      res.status(201).json({
        ok: true,
        mensaje: query,
      });
      conn.end();
    } catch (error) {
      res.status(500).json({
        ok: false,
        mensaje: "Algo salio mal :(",
      });
      conn.end();
    }
  });
};

const guardar_carrera = async (req, res) => {
  const id = 0;
  const nombre = req.body.Nombre;
  const duracion = req.body.Duracion;
  const data = [id, nombre, duracion];
  await pool.getConnection().then(async (conn) => {
    try {
      const query = await conn.query(
        "INSERT INTO Carrera values (?,?,?)",
        data
      );
      console.log(query);
      res.status(201).json({
        ok: true,
        mensaje: "Carrera registrada",
      });
      conn.end();
    } catch (error) {
      res.status(500).json({
        ok: false,
        mensaje: "Algo salio mal :(",
      });
      conn.end();
    }
  });
};

const guardar_grupo = async (req, res) => {
  const id = 0;
  const nombre = req.body.Nombre;
  const grado = req.body.Grado;
  const data = [id, nombre, grado];
  console.log(data);
  await pool.getConnection().then(async (conn) => {
    try {
      const query = await conn.query("INSERT INTO Grupo values (?,?,?)", data);
      console.log(query);
      res.status(201).json({
        ok: true,
        mensaje: "Grupo registrado",
      });
      conn.end();
    } catch (error) {
      res.status(500).json({
        ok: false,
        mensaje: "Algo salio mal :(",
      });
      conn.end();
    }
  });
};

const guardar_materia = async (req, res) => {
  const id = 0;
  const nombre = req.body.Nombre;
  const grado = req.body.Grado;
  const id_carrera = req.body.ID_Carrera;
  const data = [id, nombre, grado, id_carrera];
  await pool.getConnection().then(async (conn) => {
    try {
      const query = await conn.query(
        "INSERT INTO Materia values (?,?,?,?)",
        data
      );
      console.log(query);
      res.status(201).json({
        ok: true,
        mensaje: "Materia registrada",
      });
      conn.end();
    } catch (error) {
      res.status(500).json({
        ok: false,
        mensaje: "Algo salio mal :(",
      });
      conn.end();
    }
  });
};

const guardar_horario = async (req, res) => {
  const id = 0;
  const hora = req.body.Hora;
  const dia = req.body.Dia;
  const id_grupo = req.body.ID_Grupo;
  const id_materia = req.body.ID_Materia;
  const data = [id, hora, dia, id_grupo, id_materia];
  console.log(data);
  await pool.getConnection().then(async (conn) => {
    try {
      const query = await conn.query(
        "INSERT INTO Horario values (?,?,?,?,?)",
        data
      );
      console.log(query);
      res.status(201).json({
        ok: true,
        mensaje: "Horario registrado",
      });
      conn.end();
    } catch (error) {
      res.status(500).json({
        ok: false,
        mensaje: "Algo salio mal :(",
      });
      conn.end();
    }
  });
};

module.exports = {
    obtener_carreras,
    obtener_grupos,
    obtener_horarios,
    obtener_materias,
    guardar_carrera,
    guardar_grupo,
    guardar_horario,
    guardar_materia
};