// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================
const express = require("express");
const path = require("path");


// Tells node that we are creating an "express" server
var app = express();
// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8045;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);



// Serving our HTML files.
// app.get("/survey", function(req, res) {
//     res.sendFile(path.join(__dirname, "./public/survey.html"));
//   });


// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "./public/home.html"));
//   });

// // =============================================================================
// // LISTENER
// // The below code effectively "starts" our server
// // =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});