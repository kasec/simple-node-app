import express from "express";
import fs from "fs";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const file = fs.readFileSync("./views/index.html");
  res.set("Content-Type", "text/html");
  res.send(file);
});
app.get("/clients", (req, res) => {
  const file = fs.readFileSync("./views/clients.html");
  res.set("Content-Type", "text/html");
  res.send(file);
});
app.get("/users", (req, res) => {
  const file = fs.readFileSync("./views/users.html");
  res.set("Content-Type", "text/html");
  res.send(file);
});

// API REST
app.get("/api/users", (req, res) => {
  res.json({
    clients: [
      { name: "Azael" },
      { name: "Joel" },
      { name: "PEdro" },
      { name: "Ramiro" },
      { name: "Joaquin" },
      { name: "JEsus" },
    ],
  });
});
app.get("/api/clients", (req, res) => {
  res.json({
    clients: [
      { name: "Azael" },
      { name: "Joel" },
      { name: "PEdro" },
      { name: "Ramiro" },
      { name: "Joaquin" },
      { name: "JEsus" },
    ],
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// TO-Do check imporst send eloquent links to joel
