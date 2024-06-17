const express = require("express");
const cors = require("cors");
const Employee = require("./Employee");
require("./config");

const app = express();

app.use(express.json());

app.post("/add", async (req, res) => {
  console.log(req.body);
  let employee = new Employee(req.body);
  let result = await employee.save();
  result = result.toObject();
  res.send(result);
});

app.get("/list", async (req, res) => {
  let result = await Employee.find();
  res.send(result);
});

app.delete("/delete/:id", async (req, res) => {
  const result = await Employee.deleteOne({ _id: req.params.id });
  res.send(result);
});

app.put("/update/:id", async (req, res) => {
  console.log("Running");
  let result = await Employee.updateOne(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  );
  res.send(result);
});

app.listen(8080);
