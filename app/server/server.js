const express = require("express");
const next = require("next");

const passport = require("passport");
const session = require("express-session");

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production"; //Tells us to read from node env, is a boolean value
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  const routes = require("./routes/index")
  const db = require("./models");

  server.use(express.urlencoded({ extended: true }));
  server.use(express.json());

  // server.use(session({secret: 'keyboard cat', resave: true, saveUninitialized: true}));//session secret
  // server.use(passport.initialize());
  // server.use(passport.session());
  // passport.use(new LocalStrategy(
  //   function (username, password, done) {
  //     User.findOne({ username: username }, function (err, user) {
  //       if (err) { return done(err); }
  //       if (!user) {
  //         return done(null, false, { message: 'Incorrect username.' });
  //       }
  //       if (!user.validPassword(password)) {
  //         return done(null, false, { message: 'Incorrect password.' });
  //       }
  //       return done(null, user);
  //     });
  //   }
  // ));

  server.use("/api", routes)

  server.get("*", (req, res) => {
    //* getting this wild card means grab any route
    return handle(req, res);
  });
  
  db.sequelize.sync().then(function(){
    server
      .listen(port, err => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
      })
  })
  
    
});
