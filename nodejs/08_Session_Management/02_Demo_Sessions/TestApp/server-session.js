const express = require('express');

const app = express();
const session = require('express-session');

app.use(
  session({
    name: 'my-session',
    cookie: {
      //Current Server time + maxAge = expire datetime
      maxAge: 1000 * 60,

      //Allows for the cookie to be read only by a server (no JS)
      httpOnly: true,

      //Set for the root of the domain.
      path: '/',
    },
    secret: 'mypasswordinfy',
  })
);

app.use((req, res, next) => {
  let { visit } = req.session;

  if (!visit) {
    visit = req.session.visit = {
      count: 1,
    };
  } else {
    visit.count++;
  }
  next();
});

app.get('/', (req, res) => {
  res.send(`you viewed this page ${req.session.visit.count} times`);
});

app.listen(3000);
console.log('Server started...running with port 3000');
