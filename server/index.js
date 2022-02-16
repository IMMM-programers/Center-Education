const express = require("express");
const app = express();
const cors = require("cors");
// Middleware
app.use(express.json({ extended: false }));
app.use(cors());

// MongoDB
const connectDB = require("./database/index");
connectDB();


// Defining Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/courses", require("./routes/Courses"));
app.use("/api/messages", require("./routes/messages.js"));
// app.use("/api/ads", require("./routes/ads.js"));

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

// Connecting server
app.listen(port, () => console.log(`listening on: http://localhost:${port}`));
