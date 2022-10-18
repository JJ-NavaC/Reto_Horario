const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use(require("./routes/route.js"));

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});
