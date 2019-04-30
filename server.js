const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const passport = require('passport');
const cookieSession = require('cookie-session');
const app = express();

const path = require('path');
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/myapp");



const db = require('./models');

require('./services/passport');


const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.static('client/build'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  cookieSession({        
    maxAge: 30 * 24 * 60 * 60 * 1000,    
    keys: [ 'asjoufbdhasfasfgauidyagdss' ]
  })
);
// These tells passport to use cookies to handle authentication
// once these functions run, our User model instance will be added to req.user
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
