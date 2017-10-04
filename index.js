const express   = require('express')
    , session   = require('express-session')
    , passport  = require('passport')
    , strategy  = require(`${__dirname}/strategy`);

const app = express();
app.use( session({
  secret: '@nyth!ng y0u w@nT',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());

app.use(passport.session());

passport.use(strategy);

const port = 3000;
app.listen( port, () => { console.log(`Server listening on port ${port}`); } );
