const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/Users");

const app = express();
app.use(cors());
app.use(express.json());
const port = 5000 || process.env.port;

app.get("/", (req, res) => {
  res.send("Hello World");
});
mongoose
  .connect("mongodb://127.0.0.1:27017/userCrud")
  .then(() => {
    console.log("connected db");
  })
  .catch((e) => {
    console.log(e);
  });
//create user data
app.post("/createUser", (req, res) => {
  UserModel.create(req.body)
    // .then(user => console.log(user))
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});
//read user data
app.get("/getData", (req, res) => {
  UserModel.find({})
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

//update
//getuser data
app.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findById({ _id: id })
    .then((user) => res.json(user))
    .catch((err) => res.json.err);
});
app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndUpdate(
    { _id: id },
    {
      name: req.body.name,
      age: req.body.age,
      email: req.body.email,
    }
  )
    .then((user) => res.json(user))
    .catch((err) => res.json.err);
});

//delete record

app.delete('/deleteData/:id',(req,res)=>{
    const id = req.params.id
    UserModel.findByIdAndDelete({_id:id})
    .then((user) => res.json(user))
    .catch((err) => res.json.err);
})
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
