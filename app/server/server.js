const express = require("express");
const next = require("next");
const mysql = require("mysql");
const routes = require("./routes")

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production"; //Tells us to read from node env, is a boolean value
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  const routes = require("./routes/index")

  server.use(express.urlencoded({ extended: true }));
  server.use(express.json());

  server.use("/api", routes)

  server.get("*", (req, res) => {
    //* getting this wild card means grab any route
    return handle(req, res);
  });

  server
    .listen(port, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    })
    
});
