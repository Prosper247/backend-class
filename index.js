
const config = require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
require('./services/db.service');
const student = require('./students/route')
const Teacher = require('./teachers/route')


app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Student management app"})
});
app.use('/api/student', student) // localhost:3200/api/student/newstudent
app.use('./api/Teacher', Teacher) //localhost:3200/api/teachers/newteacher


app.listen(port, () => {
    console.log(`Server running at ${port}/`);
  });