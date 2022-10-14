const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

// CONNECTION WITH MARIA DB
const mariadb = require("mariadb");
const pool = mariadb.createPool({
  database: "Reto",
  host: "localhost",
  user: "root",
  password: "nava123",
  connectionLimit: 5,
});

// GET REQUESTS

app.get("/Carreras", async (req, res) => {
  let conn;
  conn = await pool.getConnection();
  const data = await conn.query("SELECT * FROM Carrera");
  console.log(data);
  res.json(data);
});

app.get("/Grupos", async (req, res) => {
  let conn;
  conn = await pool.getConnection();
  const data = await conn.query("SELECT * FROM Grupo");
  console.log(data);
  res.json(data);
});

app.get("/Horarios", async (req, res) => {
  let conn;
  conn = await pool.getConnection();
  const data = await conn.query("SELECT * FROM Horario");
  console.log(data);
  res.json(data);
});

app.get("/Materias", async (req, res) => {
  let conn;
  conn = await pool.getConnection();
  const data = await conn.query("SELECT * FROM Materia");
  console.log(data);
  res.json(data);
});

app.get("/Grupo/:id", async (req, res) => {
  let conn;
  const id = req.params.id;
  conn = await pool.getConnection();
  const data = await conn.query("SELECT * FROM Grupo where ID_Grupo = ?", [id]);
  console.log(data);
  res.json(data);
});

// POST REQUESTS

app.post("/Carrera", async (req, res) => {
  let conn;
  conn = await pool.getConnection();
  const data = await conn.query("INSERT INTO Carrera values (?,?,?)", [
    0,
    req.body.Nombre,
    req.body.Duracion,
  ]);
  console.log(data);
  res.json(data);
});

app.post("/Materia", async (req, res) => {
  let conn;
  conn = await pool.getConnection();
  const data = await conn.query("INSERT INTO Materia values (?,?,?,?)", [
    0,
    req.body.Nombre,
    req.body.Grado,
    req.body.ID_Carrera,
  ]);
  console.log(data);
  res.json(data);
});

app.post("/Grupo", async (req, res) => {
  let conn;
  conn = await pool.getConnection();
  const data = await conn.query("INSERT INTO Grupo values (?,?,?)", [
    0,
    req.body.Nombre,
    req.body.Grado,
  ]);
  console.log(data);
  res.json(data);
});

app.post("/Horario", async (req, res) => {
  let conn;
  conn = await pool.getConnection();
  const data = await conn.query("INSERT INTO Grupo values (?,?,?,?,?)", [
    0,
    req.body.Hora,
    req.body.Dia,
    req.body.ID_Grupo,
    req.body.ID_Materia,
  ]);
  console.log(data);
  res.json(data);
});

// LISTENER
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
