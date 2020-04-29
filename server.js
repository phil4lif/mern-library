const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const apiRoutes = require("./routes/apiRoutes")(app)
// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
//connect to the Mongo Db
mongoose.connect(process.env.MONGODB_URI || "mongodb://newUser:newPassword2@ds125871/heroku_0xn0jnk7" );
//add this instead of localhost location for build/deployment
//|| ""mongodb://localhost/reactreadinglist

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
